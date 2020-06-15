package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/handler"
	"unicornbank.io/srv/queries/models"
	queries "unicornbank.io/srv/queries/proto/queries"
	"unicornbank.io/srv/queries/subscriber"
)

var (
	serviceName           = "go.micro.api.queries"
	serviceVersion        = "0.0.1"
	subAccountCreated     = "go.micro.service.account.created"
	subAccountUpdated     = "go.micro.service.account.updated"
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
	h := new(handler.Queries)
	if err := queries.RegisterQueriesHandler(service.Server(), h); err != nil {
		log.Fatal(err)
	}

	// Register Struct as Subscriber
	if err := micro.RegisterSubscriber(subAccountCreated, service.Server(), new(subscriber.AccountCreated)); err != nil {
		log.Fatal(err)
	}
	if err := micro.RegisterSubscriber(subAccountUpdated, service.Server(), new(subscriber.AccountUpdated)); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
