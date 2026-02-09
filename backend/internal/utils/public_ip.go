package utils

import (
	"fmt"
	"net"
)

//var cachedPublicIP string

// GetPublicIP fetches EC2 public IPv4 from metadata
func GetPublicIP() (string, error) {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		return "", fmt.Errorf("failed to get local IP: %w", err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)
	return localAddr.IP.String(), nil
}
