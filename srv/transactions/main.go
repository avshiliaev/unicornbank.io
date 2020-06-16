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
	serviceName        = "go.micro.api.transactions"
	serviceVersion     = "0.0.1"
	// Subscribe to
	subTransactionProcessed = "go.micro.service.transaction.processed"
	// Publish to
	pubTransactionPlaced  = "go.micro.service.transaction.placed"
	pubTransactionUpdated  = "go.micro.service.transaction.updated"
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
	h := new(handler.Transactions)
	h.Client = service.Client()
	h.PubTransactionPlaced = pubTransactionPlaced
	if err := transactions.RegisterTransactionsHandler(service.Server(), h); err != nil {
		log.Fatal(err)
	}

	// Register Subscriber
	s := new(subscriber.TransactionProcessed)
	s.PubTransactionUpdated = pubTransactionUpdated
	if err := micro.RegisterSubscriber(subTransactionProcessed, service.Server(), s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
