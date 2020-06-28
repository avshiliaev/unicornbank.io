package main

import (
	"github.com/joho/godotenv"
	"github.com/micro/go-micro/v2/web"
	"log"
	"unicornbank.io/srv/streams/handler"
)

func main() {
	// New web service
	service := web.NewService(
		web.Name("go.micro.web.streams"),
	)

	if err := service.Init(); err != nil {
		log.Fatal("Init", err)
	}

	if err := godotenv.Load(); err != nil {
		log.Fatal("Init", err)
	}

	// Handle websocket connection
	service.HandleFunc("/profiles", handler.WebSocketHandler)

	if err := service.Run(); err != nil {
		log.Fatal("Run: ", err)
	}
}
