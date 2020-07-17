package main

import (
	"github.com/joho/godotenv"
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/approvals/mongodb"
	"unicornbank.io/srv/approvals/subscriber"
)

var (
	serviceName        = "go.micro.api.approvals"
	serviceVersion     = "0.0.1"
	subAccountCreated  = "go.micro.service.account.created"
	pubAccountApproval = "go.micro.service.account.approval"

	dbName = "approvals"
	collName = "accounts"
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
	coll, err := mongodb.MongoCollection(dbName, collName)
	if err != nil {
		log.Fatal("Cannot connect to MongoDB")
	}

	// Register Struct as Subscriber
	s := subscriber.AccountCreated{
		PubAccountApproval: pubAccountApproval,
		Client:             service.Client(),
		Coll:               coll,
	}
	if err := micro.RegisterSubscriber(subAccountCreated, service.Server(), &s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
