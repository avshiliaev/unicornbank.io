package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"lagerist.io/srv/processing/handler"
	"lagerist.io/srv/processing/subscriber"

	processing "lagerist.io/srv/processing/proto/processing"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.api.processing"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	processing.RegisterProcessingHandler(service.Server(), new(handler.Processing))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.processing", service.Server(), new(subscriber.Processing))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
