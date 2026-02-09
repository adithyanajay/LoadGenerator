package stress

import (
	"os/exec"
	"strconv"

	"github.com/google/uuid"
	"load-generator/internal/utils"
)

func StartCPUStress(workers int) string {
	id := uuid.New().String()

	cmd := exec.Command(
		"stress-ng",
		"--cpu", strconv.Itoa(workers),
		"--timeout", stressTimeout,
	)

	RegisterSession(id, cmd)
	utils.StartProcess(cmd)

	return id
}
