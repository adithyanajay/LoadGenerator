package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"load-generator/internal/models"
	"load-generator/internal/stress"
	"load-generator/internal/utils"
)

func HandleLoad(c *gin.Context) {
	var req models.LoadRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "invalid request",
		})
		return
	}

	var (
		sessionID string
		loadType  string
	)

	if req.CPUWorkers > 0 {
		sessionID = stress.StartCPUStress(req.CPUWorkers)
		loadType = "cpu"
	}

	if req.MemoryMB > 0 {
		sessionID = stress.StartMemoryStress(req.MemoryMB)
		loadType = "memory"
	}

	vmIP, err := utils.GetVMIP()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "failed to determine VM IP",
		})
		return
	}

	// 🚨 IMPORTANT: respond immediately, do not block
	c.JSON(http.StatusOK, models.LoadResponse{
		Status:         "started",
		SessionID:      sessionID,
		Type:           loadType,
		TimeoutSeconds: 300,
		VMIP:           vmIP,
		Message:        "Load started",
	})
}

func HandleStop(c *gin.Context) {
	id := c.Param("id")

	if ok := stress.StopSession(id); !ok {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "session not found",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "stopped",
	})
}

func HandleStopAll(c *gin.Context) {
	stress.StopAllSessions()

	c.JSON(http.StatusOK, gin.H{
		"status": "all stopped",
	})
}
