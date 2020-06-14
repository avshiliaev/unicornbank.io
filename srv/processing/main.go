package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"lagerist.io/srv/processing/handler"
	processing "lagerist.io/srv/processing/proto/processing"
	"lagerist.io/srv/processing/subscriber"
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
	if err := processing.RegisterProcessingHandler(service.Server(), new(handler.Processing)); err != nil {
		log.Fatal(err)
	}

	// Register Struct as Subscriber
	subTopic := "go.micro.service.newAccount"
	if err := micro.RegisterSubscriber(subTopic, service.Server(), new(subscriber.Processing)); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
