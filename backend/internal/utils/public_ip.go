package utils

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

// GetPublicIP tries EC2 metadata first, falls back gracefully
func GetPublicIP() (string, error) {
	client := &http.Client{
		Timeout: 2 * time.Second,
	}

	resp, err := client.Get(
		"http://169.254.169.254/latest/meta-data/public-ipv4",
	)
	if err == nil && resp.StatusCode == http.StatusOK {
		defer resp.Body.Close()
		body, _ := io.ReadAll(resp.Body)
		if len(body) > 0 {
			return string(body), nil
		}
	}

	// ❗ DO NOT FAIL — return empty string
	return "", fmt.Errorf("no public IP available")
}
