package models

type LoadResponse struct {
	Status         string `json:"status"`
	SessionID      string `json:"session_id"`
	Type           string `json:"type"`
	TimeoutSeconds int    `json:"timeout_seconds"`
	VMIP           string `json:"vm_ip"`
	Message        string `json:"message"`
}
