package main

import (
	"github.com/joho/godotenv"
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/notifications/handler"
	"unicornbank.io/srv/notifications/mongodb"
	notifications "unicornbank.io/srv/notifications/proto/notifications"
	"unicornbank.io/srv/notifications/subscriber"
)

var (
	serviceName    = "go.micro.api.notifications"
	serviceVersion = "0.0.1"
	// Sub to account updates
	subAccountUpdated = "go.micro.service.account.updated"
	// Sub to transaction updates
	subTransactionUpdated = "go.micro.service.transaction.updated"

	dbName = "notifications"
	collName = "notifications"
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

	// Register Stream Handlers
	_ = notifications.RegisterNotificationsHandler(service.Server(), &handler.Notifications{Coll: coll})

	// Register Subscribers
	if err := micro.RegisterSubscriber(
		subAccountUpdated,
		service.Server(),
		&subscriber.AccountUpdated{Coll: coll},
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
