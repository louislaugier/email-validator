package handlers

import (
	"sendable/handlers/middleware"
	"encoding/json"
	"net/http"
)

func MeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	u := middleware.GetUserFromRequest(r)
	if u != nil {
		json.NewEncoder(w).Encode(u)
		return
	}

	http.Error(w, "Internal Server Error", http.StatusInternalServerError)
}
