package stress

import (
	"log"
	"strconv"

	"load-generator/internal/utils"
)

func StartCPUStress(workers int) {
	args := []string{
		"--cpu", strconv.Itoa(workers),
		"--timeout", stressTimeout,
	}

	log.Printf("Starting CPU stress: %d workers\n", workers)
	utils.RunStressNG(args)
}

