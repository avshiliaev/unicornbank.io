package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"lagerist.io/srv/entities/handler"
	"lagerist.io/srv/entities/subscriber"

	entities "lagerist.io/srv/entities/proto/entities"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.api.entities"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	entities.RegisterEntitiesHandler(service.Server(), new(handler.Entities))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.entities", service.Server(), new(subscriber.Entities))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
