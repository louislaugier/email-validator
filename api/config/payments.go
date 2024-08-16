package config

import (
	"email-validator/internal/models"
	"os"

	"github.com/stripe/stripe-go/v72"
)

var (
	StripeWebhookSecret string

	StripePremiumProductID    models.StripeProductID
	StripeEnterpriseProductID models.StripeProductID
)

func initStripeClient() {
	stripe.Key = os.Getenv("STRIPE_SECRET_KEY")

	StripeWebhookSecret = os.Getenv("STRIPE_WEBHOOK_SECRET") // for Stripe events middleware

	StripePremiumProductID = models.StripeProductID(os.Getenv("STRIPE_PREMIUM_PRODUCT_ID"))
	StripeEnterpriseProductID = models.StripeProductID(os.Getenv("STRIPE_ENTERPRISE_PRODUCT_ID"))
}