package oauth

import (
	"context"
	"sendable/config"
	"fmt"
	"net/http"
	"strings"

	"golang.org/x/oauth2"
	oauth2v2 "google.golang.org/api/oauth2/v2"
	"google.golang.org/api/option"
)

func VerifyGoogleAccessToken(ctx context.Context, accessToken string) (*oauth2v2.Userinfo, error) {
	// Initialize the OAuth2 service client with the access token
	config := &oauth2.Config{}
	httpClient := config.Client(ctx, &oauth2.Token{AccessToken: accessToken})

	// Create a new oauth2Service client
	oauth2Service, err := oauth2v2.NewService(ctx, option.WithHTTPClient(httpClient))
	if err != nil {
		return nil, fmt.Errorf("oauth2v2.NewService: %v", err)
	}

	// Fetch user information using the OAuth2 service
	userinfoService := oauth2v2.NewUserinfoV2MeService(oauth2Service)
	userInfo, err := userinfoService.Get().Do()
	if err != nil {
		return nil, fmt.Errorf("UserinfoService.Get().Do: %v", err)
	}
	return userInfo, nil
}

func VerifyGoogleJWT(ctx context.Context, JWT string) (*oauth2v2.Tokeninfo, error) {
	// Use a custom HTTP client, associated with your context
	httpClient := &http.Client{}

	// Create an OAuth2 service using the custom HTTP client
	service, err := oauth2v2.NewService(ctx, option.WithHTTPClient(httpClient))
	if err != nil {
		return nil, fmt.Errorf("oauth2v2.NewService: %v", err)
	}

	// Verify the JWT using the tokeninfo endpoint and the OAuth2 service
	tokenInfoCall := service.Tokeninfo()
	tokenInfoCall.IdToken(JWT)
	tokenInfo, err := tokenInfoCall.Do()
	if err != nil {
		return nil, fmt.Errorf("tokenInfoCall.Do: %v", err)
	}

	trimmedTokenInfoAudience := strings.TrimSuffix(tokenInfo.Audience, ".apps.googleusercontent.com")
	// Verify the token's audience to ensure it was intended for your client application
	if trimmedTokenInfoAudience != config.GoogleOauthClientID {
		return nil, fmt.Errorf("wrong audience, got %v, wanted %v", trimmedTokenInfoAudience, config.GoogleOauthClientID)
	}

	return tokenInfo, nil
}
