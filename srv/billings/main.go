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

	dbName = "billings"
	collName = "transactions"
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
	if err := godotenv.Load("../../.env"); err != nil {
		log.Info("Skipping .env file")
	}

	// MongoDB connection
	coll, err := mongodb.MongoCollection(dbName, collName)
	if err != nil {
		log.Fatal("Cannot connect to MongoDB")
	}

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
