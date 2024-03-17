package handlers

import (
	"email-validator/internal/models"
	"email-validator/internal/pkg/oauth"
	"encoding/json"
	"log"
	"net/http"
)

func GoogleAuthHandler(w http.ResponseWriter, r *http.Request) {
	var body models.GoogleAuthRequest

	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		log.Printf("Error decoding JSON: %v", err)
		http.Error(w, "Error decoding JSON", http.StatusBadRequest)
		return
	}

	if body.Credential == "" || body.AccessToken == "" {
		http.Error(w, "No token provided", http.StatusBadRequest)
		return
	}

	var email string
	if body.Credential != "" {
		tokenInfo, err := oauth.VerifyCredential(r.Context(), body.Credential)
		if err != nil || tokenInfo == nil {
			if err != nil {
				log.Printf("Error verifying credential: %v", err)
			}
			http.Error(w, "Invalid credential", http.StatusUnauthorized)
			return
		}
		email = tokenInfo.Email
	} else if body.AccessToken != "" {
		userInfo, err := oauth.VerifyAccessToken(r.Context(), body.AccessToken)
		if err != nil || userInfo == nil {
			if err != nil {
				log.Printf("Error verifying access token: %v", err)
			}
			http.Error(w, "Invalid access token", http.StatusUnauthorized)
			return
		}
		email = userInfo.Email
	}

	log.Println(email)
	// TODO: get user by email
	// if nil, insert
	// return jwt
}
