package utils

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

var cachedPublicIP string

// GetPublicIP fetches EC2 public IPv4 from metadata
func GetPublicIP() (string, error) {
	if cachedPublicIP != "" {
		return cachedPublicIP, nil
	}

	client := &http.Client{
		Timeout: 2 * time.Second,
	}

	resp, err := client.Get("http://169.254.169.254/latest/meta-data/public-ipv4")
	if err != nil {
		return "", fmt.Errorf("failed to fetch public IP: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		return "", fmt.Errorf("metadata returned status %d", resp.StatusCode)
	}

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	cachedPublicIP = string(b)
	return cachedPublicIP, nil
}
