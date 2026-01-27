package models

type LoadResponse struct {
	Status           string `json:"status"`
	CPUWorkersAdded  int    `json:"cpu_workers_added"`
	MemoryMBAdded    int    `json:"memory_mb_added"`
	DurationSeconds  int    `json:"duration_seconds"`
	Message          string `json:"message"`
}

