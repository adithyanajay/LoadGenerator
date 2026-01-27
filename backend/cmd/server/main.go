package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"load-generator/internal/api"
)

func main() {
	router := gin.Default()

	router.Use(api.CORSMiddleware())

	api.RegisterRoutes(router)

	log.Println("Load Generator running on :9000")
	if err := router.Run(":9000"); err != nil {
		log.Fatal(err)
	}
}

