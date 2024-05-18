package models

import "mime/multipart"

type FileExtension string

const (
	FileExtensionCSV  FileExtension = "csv"
	FileExtensionTXT  FileExtension = "txt"
	FileExtensionXLS  FileExtension = "xls"
	FileExtensionXLSX FileExtension = "xlsx"
)

var allowedFileExtensions = []FileExtension{
	FileExtensionCSV,
	FileExtensionTXT,
	FileExtensionXLS,
	FileExtensionXLSX,
}

func (fe *FileExtension) IsAllowed() bool {
	for _, ext := range allowedFileExtensions {
		if *fe == ext {
			return true
		}
	}

	return false
}

type FileData struct {
	UploadedFile       multipart.File
	UploadedFileHeader *multipart.FileHeader

	ColumnsToScan   []string
	EmailListLength int
}
