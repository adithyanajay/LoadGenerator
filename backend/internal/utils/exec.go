package utils

import (
	"log"
	"os/exec"
)

func RunStressNG(args []string) {
	cmd := exec.Command("stress-ng", args...)

	if err := cmd.Start(); err != nil {
		log.Println("Failed to start stress-ng:", err)
		return
	}

	// Fire-and-forget
	go func() {
		_ = cmd.Wait()
	}()
}

