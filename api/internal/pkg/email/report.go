package email

import (
	"email-validator/config"
	"email-validator/internal/models"
	"email-validator/internal/pkg/file"
	"log"
	"mime/multipart"

	"github.com/google/uuid"
)

// ValidateManyWithReport consumes ValidateMany and sends a report by email
func ValidateManyWithReport(emails []string, reportRecipient string) {
	report, err := ValidateMany(emails)

	if err != nil {
		log.Printf("Error validating many with report: %v", err)
		sendReportError(reportRecipient)
	}

	sendReport(report, reportRecipient)
}

// ValidateManyFromFileWithReport consumes ValidateManyFromFile and sends a report by email
func ValidateManyFromFileWithReport(uploadedFile multipart.File, uploadedFileHeader *multipart.FileHeader, extension models.FileExtension, reportRecipient string) {
	report, err := ValidateManyFromFile(uploadedFile, uploadedFileHeader, extension)

	if err != nil {
		log.Printf("Error validating many from file with report: %v", err)
		sendReportError(reportRecipient)
	}

	sendReport(report, reportRecipient)
}

// sendReport sends a report by email to recipient
func sendReport(report []models.ReacherResponse, recipient string) {
	ID := uuid.New()

	filePath, err := file.CreateCSVReport(report, ID)
	if err != nil {
		log.Printf("Error creating report: %v", err)
		return
	}

	zipFile, err := file.ToZIP(filePath)
	if err != nil {
		log.Printf("Error converting report to ZIP: %v", err)
		return
	}
	zipFile.Close() // Make sure to close the ZIP file when you're done

	token, _, err := file.CreateJSONReportToken(ID)
	if err != nil {
		log.Printf("Error creating report token: %v", err)
		return
	}

	err = config.EmailClient.SendEmail(models.ReportTemplate, "Email validation report", "Your email validation report is ready!", map[string]string{
		"id":     ID.String(),
		"token":  token.String(),
		"domain": config.DomainURL,
	}, recipient)
	if err != nil {
		log.Printf("Error sending report: %v", err)
		return
	}
}

// sendReportError sends a report error by email to recipient
func sendReportError(recipient string) {
	err := config.EmailClient.SendEmail(models.ErrorTemplate, "Email validation error", "Issues while attempting to validate emails.", nil, recipient)
	if err != nil {
		log.Printf("Error sending report error: %v", err)
		return
	}
}
