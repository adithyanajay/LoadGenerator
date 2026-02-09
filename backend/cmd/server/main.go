package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"load-generator/internal/api"
)

func main() {
	r := gin.Default()
	r.Use(api.CORSMiddleware())

	api.RegisterRoutes(r)

	log.Println("Load Generator running on :9000")
	if err := r.Run(":9000"); err != nil {
		log.Fatal(err)
	}
}
