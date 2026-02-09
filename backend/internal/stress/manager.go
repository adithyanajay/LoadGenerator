package stress

import (
	"os/exec"
	"sync"
)

const stressTimeout = "300s"

var (
	mu       sync.Mutex
	sessions = make(map[string]*exec.Cmd)
)

func RegisterSession(id string, cmd *exec.Cmd) {
	mu.Lock()
	defer mu.Unlock()
	sessions[id] = cmd
}

func StopSession(id string) bool {
	mu.Lock()
	defer mu.Unlock()

	cmd, ok := sessions[id]
	if !ok {
		return false
	}

	_ = cmd.Process.Kill()
	delete(sessions, id)
	return true
}

func StopAllSessions() {
	mu.Lock()
	defer mu.Unlock()

	for id, cmd := range sessions {
		_ = cmd.Process.Kill()
		delete(sessions, id)
	}
}
