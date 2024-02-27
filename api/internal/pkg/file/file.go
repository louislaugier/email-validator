package file

import (
	"encoding/csv"
	"io"
	"log"
	"os"
	"time"
)

// SaveFile saves the provided file
func SaveFile(file *os.File, filePath string) error {
	destination, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer destination.Close()

	_, err = io.Copy(destination, file)
	if err != nil {
		return err
	}

	return nil
}

// SaveStringsToNewCSV saves a list of strings to a new CSV file
func SaveStringsToNewCSV(data []string, filePath string, IPs string, timestamp time.Time) error {
	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()
	writer := csv.NewWriter(file)
	defer writer.Flush()

	// first line is the timestamp followed by author IPs
	err = writer.Write([]string{timestamp.Local().String(), IPs})
	if err != nil {
		log.Println("Error writing IPs and timestamp to CSV:", err)
		return err
	}

	for _, str := range data {
		err := writer.Write([]string{str})
		if err != nil {
			log.Println("Error writing string to CSV:", err)
			return err
		}
	}

	return nil
}