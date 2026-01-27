package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"load-generator/internal/models"
	"load-generator/internal/stress"
)

func HandleLoad(c *gin.Context) {
	var req models.LoadRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "invalid request body",
		})
		return
	}

	if req.CPUWorkers > 0 {
		stress.StartCPUStress(req.CPUWorkers)
	}

	if req.MemoryMB > 0 {
		stress.StartMemoryStress(req.MemoryMB)
	}

	resp := models.LoadResponse{
		Status:           "started",
		CPUWorkersAdded:  req.CPUWorkers,
		MemoryMBAdded:    req.MemoryMB,
		DurationSeconds: 15,
		Message:          "Load task started successfully",
	}

	c.JSON(http.StatusOK, resp)
}

