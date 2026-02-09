package stress

import (
	"os/exec"
	"strconv"

	"github.com/google/uuid"
	"load-generator/internal/utils"
)

func StartMemoryStress(memoryMB int) string {
	id := uuid.New().String()

	cmd := exec.Command(
		"stress-ng",
		"--vm", "1",
		"--vm-bytes", strconv.Itoa(memoryMB)+"M",
		"--timeout", stressTimeout,
	)

	RegisterSession(id, cmd)
	utils.StartProcess(cmd)

	return id
}
