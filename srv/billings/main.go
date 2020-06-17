package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/billings/models"
	"unicornbank.io/srv/billings/subscriber"
)

var (
	serviceName             = "go.micro.api.billings"
	serviceVersion          = "0.0.1"
	subTransactionPlaced    = "go.micro.service.transaction.placed"
	pubTransactionProcessed = "go.micro.service.transaction.processed"
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

	// Register Struct as Subscriber
	s := new(subscriber.TransactionPlaced)
	s.Client = service.Client()
	s.PubTransactionProcessed = pubTransactionProcessed
	if err := micro.RegisterSubscriber(subTransactionPlaced, service.Server(), s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
