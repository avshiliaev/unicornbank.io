package main

import (
	"github.com/joho/godotenv"
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/profiles/handler"
	"unicornbank.io/srv/profiles/mongodb"
	profiles "unicornbank.io/srv/profiles/proto/profiles"
	"unicornbank.io/srv/profiles/subscriber"
)

var (
	serviceName    = "go.micro.api.profiles"
	serviceVersion = "0.0.1"
	// Sub to account updates
	subAccountCreated = "go.micro.service.account.created"
	subAccountUpdated = "go.micro.service.account.updated"
	// Sub to transaction updates
	subTransactionPlaced  = "go.micro.service.transaction.placed"
	subTransactionUpdated = "go.micro.service.transaction.updated"
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
	coll := mongodb.ProfilesCollection()

	// Register Stream Handlers
	_ = profiles.RegisterProfilesHandler(service.Server(), &handler.Profiles{Coll: coll})

	// Register Subscribers
	if err := micro.RegisterSubscriber(
		subAccountCreated,
		service.Server(),
		&subscriber.AccountCreated{Coll: coll},
	); err != nil {
		log.Fatal(err)
	}
	if err := micro.RegisterSubscriber(
		subAccountUpdated,
		service.Server(),
		&subscriber.AccountUpdated{Coll: coll},
	); err != nil {
		log.Fatal(err)
	}
	if err := micro.RegisterSubscriber(
		subTransactionPlaced,
		service.Server(),
		&subscriber.TransactionPlaced{Coll: coll},
	); err != nil {
		log.Fatal(err)
	}
	if err := micro.RegisterSubscriber(
		subTransactionUpdated,
		service.Server(),
		&subscriber.TransactionUpdated{Coll: coll},
	); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
