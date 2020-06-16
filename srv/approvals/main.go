package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/approvals/models"
	"unicornbank.io/srv/approvals/subscriber"
)

var (
	serviceName        = "go.micro.api.approvals"
	serviceVersion     = "0.0.1"
	subAccountCreated  = "go.micro.service.account.created"
	pubAccountApproval = "go.micro.service.account.approval"
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
	s := new(subscriber.AccountCreated)
	s.Client = service.Client()
	s.PubAccountApproval = pubAccountApproval
	if err := micro.RegisterSubscriber(subAccountCreated, service.Server(), s); err != nil {
		log.Fatal(err)
	}

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
