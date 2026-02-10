package main

import (
	"log"

	"load-generator/internal/api"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.New()

	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	// ✅ ONE place only
	// r.Use(api.CORSMiddleware())

	api.RegisterRoutes(r)

	log.Println("Load Generator running on :9000")
	if err := r.Run(":9000"); err != nil {
		log.Fatal(err)
	}
}
