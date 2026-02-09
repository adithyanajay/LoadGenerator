package utils

import (
	"log"
	"os/exec"
)

func StartProcess(cmd *exec.Cmd) {
	if err := cmd.Start(); err != nil {
		log.Println("Failed to start process:", err)
		return
	}

	go func() {
		_ = cmd.Wait()
	}()
}
