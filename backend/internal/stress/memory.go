package stress

import (
	"log"
	"strconv"

	"load-generator/internal/utils"
)

func StartMemoryStress(memoryMB int) {
	args := []string{
		"--vm", "1",
		"--vm-bytes", strconv.Itoa(memoryMB) + "M",
		"--timeout", stressTimeout,
	}

	log.Printf("Starting Memory stress: %d MB\n", memoryMB)
	utils.RunStressNG(args)
}

