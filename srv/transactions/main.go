package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/transactions/handler"
	"unicornbank.io/srv/transactions/models"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
	"unicornbank.io/srv/transactions/subscriber"
)

var (
	serviceName    = "go.micro.api.transactions"
	serviceVersion = "0.0.1"
	subTopicOne    = "go.micro.service.generic"
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
	if err := transactions.RegisterTransactionsHandler(service.Server(), new(handler.Transactions)); err != nil {
		log.Fatal(err)
	}

	// Register Struct as Subscriber
	if err := micro.RegisterSubscriber(subTopicOne, service.Server(), new(subscriber.Transactions)); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
