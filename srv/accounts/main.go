package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/handler"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
	"unicornbank.io/srv/accounts/subscriber"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.api.accounts"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Initialise a database connection and migrate the schema
	models.Migrate()

	// Register Handler
	h := new(handler.Accounts)
	h.Client = service.Client()
	accounts.RegisterAccountsHandler(service.Server(), h)

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.accounts", service.Server(), new(subscriber.Accounts))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
