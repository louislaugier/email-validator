// middleware/log.go
package middleware

import (
	"bytes"
	"fmt"
	"io"
	"net/http"

	"email-validator/internal/models"
	"email-validator/internal/pkg/format"
)

// Log is a middleware function that logs HTTP requests.
func Log(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Clone the request body so we can log it and then re-use it
		var buf bytes.Buffer
		tee := io.TeeReader(r.Body, &buf)
		body, err := io.ReadAll(tee)
		if err != nil {
			http.Error(w, "Failed to read request body", http.StatusInternalServerError)
			return
		}
		defer r.Body.Close()
		r.Body = io.NopCloser(&buf)

		// Use our custom ResponseWriter from the models package
		customWriter := models.NewResponseWriter(w)

		// Call the next handler and record the status code. Note that customWriter is directly passed without dereference.
		next.ServeHTTP(customWriter, r)

		// After the next handler serves the request, log the request with status color.
		statusColor := format.ColorizeRequestLog(customWriter.StatusCode)

		// Wrap the entire log message with the color based on status code
		fmt.Printf("%sRequest: %s %s - Headers: %v - Body: %s - IP: %s - Status: %d%s\n",
			statusColor, r.Method, r.URL.Path, r.Header, string(body), GetIPsFromRequest(r), customWriter.StatusCode, "\x1b[0m")
	})
}
