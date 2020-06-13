package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"lagerist.io/srv/projects/handler"
	"lagerist.io/srv/projects/models"
	projects "lagerist.io/srv/projects/proto/projects"
	"lagerist.io/srv/projects/subscriber"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.api.projects"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Initialise a database connection and migrate the schema
	models.Migrate()

	// Register Handler
	projects.RegisterProjectsHandler(service.Server(), new(handler.Projects))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.projects", service.Server(), new(subscriber.Projects))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
