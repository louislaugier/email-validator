package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv() {
	if os.Getenv("env") == "DEV" {
		if err := godotenv.Load("../.env"); err != nil {
			if err = godotenv.Load(".env"); err != nil {
				log.Fatal("godotenv.Load: ", err)
			}
		}
	}
}