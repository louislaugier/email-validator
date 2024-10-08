package middleware

import (
	"sendable/config"
	"sendable/internal/models"
	"sendable/internal/pkg/utils"
	"net/http"
	"sync"
	"time"

	"github.com/google/uuid"
)

// BaseRateLimiter sets the rate limit to 1 request per second
var (
	BaseRateLimiter = models.RateLimiter{
		Limit: config.BaseRateLimiterRequestFrequency,

		CustomLimit: 0 * time.Second, // init to 0
	}

	RateLimitClientMap = make(map[string]*models.ClientInfo)
	RateLimitMutex     sync.Mutex
)

var bulkValidationMutex sync.Mutex
var bulkValidationMap = make(map[string]int)

// ValidateBulkValidationRateLimit limits simultaneous bulk validation requests per user.
func ValidateBulkValidationRateLimit(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		userID := GetUserFromRequest(r).ID
		if !acquireBulkValidationLock(userID) {
			http.Error(w, "Parallel bulk validation batches limit reached", http.StatusTooManyRequests)
			return
		}

		// Removed defer here to manage it explicitly after updating the status
		next.ServeHTTP(w, r)

		// Note: Do not release the lock here. It will be released after updating the status.
	})
}

// SingleValidationRateLimit limits single validation requests based on origin.
func SingleValidationRateLimit(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if GetUserFromRequest(r) != nil {
			limitSingleByUserPlanConcurrencyLimit(w, r, next)
		} else {
			limitSingleByIP(w, r, next)
		}
	})
}

// limitSingleByIP limits single validation requests based on the IP rate limit.
func limitSingleByIP(w http.ResponseWriter, r *http.Request, next http.Handler) {
	IPs := utils.GetIPsFromRequest(r)

	if !validateIPRateLimit(IPs) {
		http.Error(w, "Guests can only validate 1 email address every 30 seconds, signup for free to increase your limits.", http.StatusTooManyRequests)
		return
	}

	next.ServeHTTP(w, r)
}

func validateIPRateLimit(clientIP string) bool {
	RateLimitMutex.Lock()
	defer RateLimitMutex.Unlock()

	now := time.Now()
	clientInfo, ok := RateLimitClientMap[clientIP]
	if !ok {
		// If the client does not exist in the map, create a new entry with the current time
		RateLimitClientMap[clientIP] = &models.ClientInfo{
			LastRequestTime: now,
		}
		return true // Allow the request as this is the first one
	}

	// Calculate the time difference since the last request
	if now.Sub(clientInfo.LastRequestTime) < config.GuestEmailValidationFrequency {
		// If the request is too soon (less than 30 seconds), reject it
		return false
	}

	// If the time difference is sufficient, update the last request time and allow the request
	clientInfo.LastRequestTime = now
	return true
}

// isAccountConcurrencyLimitReached checks and updates rate limits based on the user's account.
func isAccountConcurrencyLimitReached(user *models.User) bool {
	RateLimitMutex.Lock()
	defer RateLimitMutex.Unlock()

	_, ok := RateLimitClientMap[user.ID.String()]
	if !ok {
		RateLimitClientMap[user.ID.String()] = &models.ClientInfo{}
	}

	if RateLimitClientMap[user.ID.String()].ActiveValidations >= config.ConcurrentSingleValidationsLimits[user.CurrentPlan.Type] {
		return true
	}

	if user.CurrentPlan.Type != models.EnterpriseSubscription {
		RateLimitClientMap[user.ID.String()].ActiveValidations++
	}

	return false
}

// BaseRateLimit wraps an http.Handler and limits requests based on the base rate limiter
func BaseRateLimit(h http.Handler, customLimit *time.Duration) http.Handler {
	rl := BaseRateLimiter
	if customLimit != nil {
		rl.CustomLimit = *customLimit
	}

	return RateLimit(h, rl)
}

// RateLimit wraps an http.Handler and limits requests based on the provided rate limiter
func RateLimit(next http.Handler, limiter models.RateLimiter) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		RateLimitMutex.Lock()

		clientIP := r.RemoteAddr
		clientInfo, ok := RateLimitClientMap[clientIP]
		if !ok {
			clientInfo = &models.ClientInfo{}
			RateLimitClientMap[clientIP] = clientInfo
		}

		RateLimitMutex.Unlock()
		clientInfo.Lock.Lock()
		defer clientInfo.Lock.Unlock()

		now := time.Now()

		// Use custom limit if it's set, otherwise use the default one
		actualLimit := limiter.Limit
		if limiter.CustomLimit > 0 {
			actualLimit = limiter.CustomLimit
		}

		elapsed := now.Sub(clientInfo.LastRequestTime)
		if elapsed < actualLimit {
			time.Sleep(actualLimit - elapsed)
		}

		clientInfo.LastRequestTime = now
		next.ServeHTTP(w, r)
	})
}

// limitSingleByUserPlanConcurrencyLimit limits single validation requests based on the user's plan concurrency limit.
func limitSingleByUserPlanConcurrencyLimit(w http.ResponseWriter, r *http.Request, next http.Handler) {
	user := GetUserFromRequest(r)

	if isAccountConcurrencyLimitReached(user) {
		http.Error(w, "Maximum parallel validations reached. Try again later or upgrade your account.", http.StatusTooManyRequests)
		return
	}

	next.ServeHTTP(w, r)
}

// acquireBulkValidationLock attempts to acquire a lock for a user to start bulk validation.
func acquireBulkValidationLock(userID uuid.UUID) bool {
	bulkValidationMutex.Lock()
	defer bulkValidationMutex.Unlock()

	currentCount, ok := bulkValidationMap[userID.String()]
	if ok && currentCount >= config.ConcurrentBulkValidationsLimit {
		return false // Limit reached, cannot start another batch
	}

	// Increment the count of running validations for this user
	bulkValidationMap[userID.String()] = currentCount + 1
	return true
}

// ReleaseBulkValidationLock releases the lock for a user after bulk validation.
func ReleaseBulkValidationLock(userID uuid.UUID) {
	bulkValidationMutex.Lock()
	defer bulkValidationMutex.Unlock()

	currentCount, ok := bulkValidationMap[userID.String()]
	if ok && currentCount > 1 {
		bulkValidationMap[userID.String()] = currentCount - 1
	} else {
		delete(bulkValidationMap, userID.String())
	}
}
