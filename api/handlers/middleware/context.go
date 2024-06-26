package middleware

import (
	"context"
	"email-validator/internal/models"
	"net/http"
)

// Extracts origin from the request
func GetOriginFromRequest(r *http.Request) string {
	return r.Header.Get("Origin")
}

// GetValueFromContext retrieves the value from the context by a key name.
func GetValueFromContext(ctx context.Context, key userContextKey) interface{} {
	return ctx.Value(key)
}

// Extracts user from the request context
func GetUserFromRequest(r *http.Request) *models.User {
	user := GetValueFromContext(r.Context(), userKey)

	if user == nil {
		return nil
	}

	return user.(*models.User)
}

// Extracts file data from the request context
func GetFileDataFromRequest(r *http.Request) *models.FileData {
	fileData := GetValueFromContext(r.Context(), fileDataKey)

	if fileData == nil {
		return nil
	}

	return fileData.(*models.FileData)
}
