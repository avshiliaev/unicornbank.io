package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"lagerist.io/srv/projects/handler"
	"lagerist.io/srv/projects/subscriber"

	projects "lagerist.io/srv/projects/proto/projects"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.api.projects"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	projects.RegisterProjectsHandler(service.Server(), new(handler.Projects))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.projects", service.Server(), new(subscriber.Projects))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
