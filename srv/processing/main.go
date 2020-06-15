package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/processing/handler"
	"unicornbank.io/srv/processing/models"
	processing "unicornbank.io/srv/processing/proto/processing"
	"unicornbank.io/srv/processing/subscriber"
)

var (
	serviceName        = "go.micro.api.processing"
	serviceVersion     = "0.0.1"
	subAccountUpdated  = "go.micro.service.account.updated"
	pubAccountApproval = "go.micro.service.account.approval"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name(serviceName),
		micro.Version(serviceVersion),
	)

	// Initialise service
	service.Init()

	// Initialise a database connection and migrate the schema
	models.Migrate()

	// Register Handler
	h := new(handler.Processing)
	h.Client = service.Client()
	if err := processing.RegisterProcessingHandler(service.Server(), h); err != nil {
		log.Fatal(err)
	}

	// Register Struct as Subscriber
	s := new(subscriber.AccountUpdated)
	s.Client = service.Client()
	s.PubAccountApproval = pubAccountApproval
	if err := micro.RegisterSubscriber(subAccountUpdated, service.Server(), s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
