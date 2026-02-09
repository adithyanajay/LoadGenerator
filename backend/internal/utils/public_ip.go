package utils

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

// GetPublicIP returns the EC2 public IPv4 address
func GetPublicIP() (string, error) {
	client := &http.Client{
		Timeout: 2 * time.Second,
	}

	resp, err := client.Get(
		"http://169.254.169.254/latest/meta-data/public-ipv4",
	)
	if err != nil {
		return "", fmt.Errorf("failed to query EC2 metadata: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("metadata returned status %d", resp.StatusCode)
	}

	ip, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read metadata response: %w", err)
	}

	if len(ip) == 0 {
		return "", fmt.Errorf("instance has no public IP")
	}

	return string(ip), nil
}
