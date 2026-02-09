package utils

import (
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

// GetPublicIP returns the VM's public IPv4 as seen externally
func GetPublicIP() (string, error) {
	client := &http.Client{
		Timeout: 3 * time.Second,
	}

	resp, err := client.Get("http://checkip.amazonaws.com")
	if err != nil {
		return "", fmt.Errorf("failed to fetch public IP: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read IP response: %w", err)
	}

	ip := strings.TrimSpace(string(body))
	if ip == "" {
		return "", fmt.Errorf("empty public IP response")
	}

	return ip, nil
}
