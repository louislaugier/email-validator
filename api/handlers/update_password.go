package handlers

import (
	"sendable/handlers/middleware"
	"sendable/internal/models"
	"sendable/internal/pkg/user"
	"sendable/internal/pkg/utils"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
)

func UpdatePasswordHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	body := models.UpdatePasswordRequest{}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		handleError(w, err, "Error decoding JSON", http.StatusBadRequest)
		return
	} else if body.CurrentPassword == "" || body.NewPassword == "" {
		err := errors.New("missing currentPassword & newPassword pair in body")
		handleError(w, err, err.Error(), http.StatusBadRequest)
		return
	}

	ok, err := utils.IsValidPassword(body.NewPassword)
	if !ok || err != nil {
		http.Error(w, fmt.Sprintf("invalid new password: %s", err.Error()), http.StatusBadRequest)
		return
	}

	requesterUser := middleware.GetUserFromRequest(r)
	u, err := user.GetByIDAndPasswordSHA256(requesterUser.ID, utils.Encrypt(body.CurrentPassword))
	if err != nil {
		handleError(w, err, "Internal Server Error", http.StatusInternalServerError)
		return
	} else if u == nil {
		err := errors.New("wrong currentPassword")
		handleError(w, err, err.Error(), http.StatusBadRequest)
		return
	}

	err = user.UpdatePasswordSHA256(requesterUser.ID, utils.Encrypt(body.NewPassword))
	if err != nil {
		handleError(w, err, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	fmt.Fprint(w, http.StatusText(http.StatusNoContent))
}
