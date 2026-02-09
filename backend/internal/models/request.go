package models

type LoadRequest struct {
	CPUWorkers int `json:"cpu_workers"`
	MemoryMB   int `json:"memory_mb"`
}
