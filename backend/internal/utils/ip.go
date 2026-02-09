package utils

import (
	"fmt"
	"net"
)

// GetVMIP returns the primary outbound IP of the VM
// Works reliably on AWS / cloud VMs
func GetVMIP() (string, error) {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		return "", fmt.Errorf("failed to determine VM IP: %w", err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)
	return localAddr.IP.String(), nil
}
