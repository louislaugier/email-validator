package email

import (
	"context"
	"sendable/internal/models"
	"sendable/internal/pkg/file"
	"sendable/internal/pkg/format"
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
)

// func IsReachable(email string) bool {
// 	resp, err := Validate(email)
// 	if err != nil {
// 		return false
// 	}

// 	return resp.MX.AcceptsMail && resp.SMTP.IsDeliverable
// }

func Validate(email string) (*models.ReacherResponse, error) {
	if format.IsEmailValid(email) {
		resp, err := postToReacher(email)
		if err != nil {
			return nil, err
		}

		return resp, nil
	}

	return nil, models.ErrInvalidEmail
}

// ValidateManyFromFile determines the file format and validates emails accordingly
func ValidateManyFromFile(fileData models.FileData, extension models.FileExtension) ([]models.ReacherResponse, error) {
	var (
		emails    []string
		delimiter rune
		err       error
	)

	switch extension {
	case models.FileExtensionCSV:
		delimiter, err = file.GuessCSVDelimiter(fileData.UploadedFileHeader)
		if err != nil {
			return nil, err
		}

		emails, err = file.GetEmailsFromCSV(fileData.UploadedFile, delimiter, fileData.ColumnsToScan)
	case models.FileExtensionXLSX:
		emails, err = file.GetEmailsFromXLSX(fileData.UploadedFile, fileData.ColumnsToScan)
	case models.FileExtensionXLS:
		emails, err = file.GetEmailsFromXLS(fileData.UploadedFile, fileData.ColumnsToScan)
	case models.FileExtensionTXT:
		emails, err = file.GetEmailsFromTXT(fileData.UploadedFile)
	}

	if err != nil {
		return nil, err
	}

	resp, err := ValidateMany(emails)
	if err != nil {
		return nil, err
	}

	return resp, nil
}

// ValidateMany validates emails using multiple goroutines.
func ValidateMany(emails []string) ([]models.ReacherResponse, error) {
	emailChannel := make(chan string, len(emails))
	errChannel := make(chan error, 1) // Error channel with a buffer to store at least one error
	var validatedEmails []models.ReacherResponse
	var waitGroup sync.WaitGroup
	var mutex sync.Mutex

	// Default threadsCount to 10 if THREADS_COUNT is not set
	threadsCount := 10
	if tc, err := strconv.Atoi(os.Getenv("THREADS_COUNT")); err == nil {
		threadsCount = tc
	}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel() // Ensure we release resources associated with context

	for i := 0; i < threadsCount; i++ {
		waitGroup.Add(1)
		go func() {
			defer waitGroup.Done()
			for {
				select {
				case email, ok := <-emailChannel:
					if !ok {
						return // Channel was closed and drained
					}
					resp, err := Validate(email)
					if err != nil {
						if !errors.Is(err, models.ErrInvalidEmail) {
							errChannel <- err
							cancel() // Signal all goroutines to stop by canceling the context
							return
						}

						// craft mock reacher response saying format invalid to prevent calling reacher api for nothing
						validatedEmails = append(validatedEmails, NewInvalidFormatReacherResponse(email))
					} else {
						mutex.Lock()
						validatedEmails = append(validatedEmails, *resp)
						mutex.Unlock()
					}
				case <-ctx.Done():
					return // Context has been cancelled, stop goroutine
				}
			}
		}()
	}

	for _, email := range emails {
		email = strings.TrimSpace(email)
		if email != "" {
			select {
			case emailChannel <- email:
			case <-ctx.Done():
				break // If context is done, stop validating emails
			}
		}
	}

	close(emailChannel)
	waitGroup.Wait()

	select {
	case err := <-errChannel: // Check if an error was sent to the error channel
		return nil, err
	default:
		return validatedEmails, nil
	}
}

// ValidateManyBulk validates emails using Reacher combined with Rabbitmq
func ValidateManyBulk(emails []string) ([]models.ReacherResponse, error) {
	if len(emails) == 0 {
		return nil, models.ErrNoEmailsToValidate
	}

	// TODO (further versions)
	// https://help.reacher.email/bulk-email-verification

	return nil, nil
}

func ValidateValidationRequest(w http.ResponseWriter, r *http.Request) (*models.ValidateEmailsRequest, error) {
	req := models.ValidateEmailsRequest{}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		log.Printf("Failed to decode request payload: %v", err)
		http.Error(w, "invalid payload", http.StatusBadRequest)

		return nil, err
	} else if len(req.Emails) == 0 {
		http.Error(w, models.ErrNoEmailsToValidate.Error(), http.StatusBadRequest)
		return nil, models.ErrNoEmailsToValidate
		// } else if len(req.Emails) > 1000000 {
		// 	http.Error(w, models.ErrTooManyEmailsToValidate.Error(), http.StatusBadRequest)
		// 	return nil, models.ErrTooManyEmailsToValidate
	}

	return &req, nil
}
