package main

import (
	"github.com/joho/godotenv"
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/billings/mongodb"
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

	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Init", err)
	}

	// MongoDB connection
	coll := mongodb.TransactionsCollection()

	// Register Struct as Subscriber
	s := subscriber.TransactionCreated{
		PubTransactionApproval: pubTransactionProcessed,
		Client:                 service.Client(),
		Coll:                   coll,
	}
	if err := micro.RegisterSubscriber(subTransactionPlaced, service.Server(), &s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
