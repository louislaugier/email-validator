package middleware

import (
	"context"
	"sendable/internal/pkg/user"
	"sendable/internal/pkg/utils"
	"log"
	"net/http"
)

// ValidateAPIKey middleware validates the API key in the request header.
func ValidateAPIKey(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		key := r.Header.Get("X-API-Key")

		if key == "" {
			http.Error(w, "Missing or invalid X-API-Key header", http.StatusUnauthorized)
			return
		}

		user, err := user.GetByAPIKeySHA256(utils.Encrypt(key))
		if err != nil || user == nil {
			log.Printf("Error fetching user: %v", err)
			http.Error(w, "Invalid X-API-Key header", http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), userKey, user)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
