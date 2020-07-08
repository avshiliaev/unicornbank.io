package main

import (
	log "github.com/micro/go-micro/v2/logger"
	"github.com/micro/go-micro/v2"
	"srv/websocket-proxy/handler"
	"srv/websocket-proxy/subscriber"

	websocket "srv/websocket-proxy/proto/websocket"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.service.websocket"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	websocket.RegisterWebsocketHandler(service.Server(), new(handler.Websocket))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.websocket", service.Server(), new(subscriber.Websocket))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
