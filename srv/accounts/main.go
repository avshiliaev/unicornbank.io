package main

import (
	"github.com/joho/godotenv"
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/handler"
	"unicornbank.io/srv/accounts/mongodb"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
	"unicornbank.io/srv/accounts/subscriber"
)

var (
	serviceName    = "go.micro.api.accounts"
	serviceVersion = "0.0.1"
	// Subscribe to
	subAccountApproval   = "go.micro.service.account.approval"
	subTransactionPlaced = "go.micro.service.transaction.placed"
	// Publish to
	pubAccountCreated = "go.micro.service.account.created"
	pubAccountUpdated = "go.micro.service.account.updated"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name(serviceName),
		micro.Version(serviceVersion),
	)

	// Initialise service
	service.Init()

	if err := godotenv.Load(); err != nil {
		log.Fatal("Init", err)
	}

	coll := mongodb.Collection()

	// Register Handler
	handle := handler.Accounts{
		Client:            service.Client(),
		PubAccountCreated: pubAccountCreated,
		Coll:              coll,
	}
	if err := accounts.RegisterAccountsHandler(service.Server(), &handle); err != nil {
		log.Fatal(err)
	}

	// Register Subscriber
	subApproval := subscriber.AccountApproval{
		PubAccountUpdated: pubAccountUpdated,
		Coll:              coll,
	}
	if err := micro.RegisterSubscriber(subAccountApproval, service.Server(), &subApproval); err != nil {
		log.Fatal(err)
	}
	subTransProc := subscriber.TransactionPlaced{
		PubAccountUpdated: pubAccountUpdated,
		Coll:              coll,
	}
	if err := micro.RegisterSubscriber(subTransactionPlaced, service.Server(), &subTransProc); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
