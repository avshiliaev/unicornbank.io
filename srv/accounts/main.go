package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/handler"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
	"unicornbank.io/srv/accounts/subscriber"
)

var (
	serviceName        = "go.micro.api.accounts"
	serviceVersion     = "0.0.1"
	// Subscribe to
	subAccountApproval = "go.micro.service.account.approval"
	// Publish to
	pubAccountCreated  = "go.micro.service.account.created"
	pubAccountUpdated  = "go.micro.service.account.updated"
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
	h := new(handler.Accounts)
	h.Client = service.Client()
	h.PubAccountCreated = pubAccountCreated
	if err := accounts.RegisterAccountsHandler(service.Server(), h); err != nil {
		log.Fatal(err)
	}

	// Register Subscriber
	s := new(subscriber.AccountApproval)
	s.PubAccountUpdated = pubAccountUpdated
	if err := micro.RegisterSubscriber(subAccountApproval, service.Server(), s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
