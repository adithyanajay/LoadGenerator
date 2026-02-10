package api

// import "github.com/gin-gonic/gin"

// func CORSMiddleware() gin.HandlerFunc {
// 	return func(c *gin.Context) {

// 		// 🔒 Guard: prevent duplicate headers
// 		if c.Writer.Header().Get("Access-Control-Allow-Origin") == "" {
// 			c.Header("Access-Control-Allow-Origin", "*")
// 			c.Header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
// 			c.Header("Access-Control-Allow-Headers", "Content-Type")
// 		}

// 		if c.Request.Method == "OPTIONS" {
// 			c.AbortWithStatus(204)
// 			return
// 		}

// 		c.Next()
// 	}
// }
