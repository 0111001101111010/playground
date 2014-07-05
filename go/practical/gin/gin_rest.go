package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main() {
	// Creates a gin router + logger and recovery (crash-free) middlewares
	r := gin.Default()

	r.GET("/someGet", getting)
	r.POST("/somePost", posting)
	r.PUT("/somePut", putting)
	r.DELETE("/someDelete", deleting)
	r.PATCH("/somePatch", patching)

	// Listen and server on 0.0.0.0:8080
	r.Run(":8080")
}

func getting(c gin.Context) {

}
func posting(c gin.Context) {

}
func putting(c gin.Context) {

}
func deleting(c gin.Context) {

}
func patching(c gin.Context) {

}
