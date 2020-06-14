package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/processing/handler"
	processing "unicornbank.io/srv/processing/proto/processing"
	"unicornbank.io/srv/processing/subscriber"
)

var (
	serviceName    = "go.micro.api.processing"
	serviceVersion = "0.0.1"
	subTopicOne    = "go.micro.service.newAccount"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name(serviceName),
		micro.Version(serviceVersion),
	)

	// Initialise service
	service.Init()

	// Register Handler
	if err := processing.RegisterProcessingHandler(service.Server(), new(handler.Processing)); err != nil {
		log.Fatal(err)
	}

	// Register Struct as Subscriber
	if err := micro.RegisterSubscriber(subTopicOne, service.Server(), new(subscriber.Processing)); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
