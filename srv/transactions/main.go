package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/transactions/handler"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
	"unicornbank.io/srv/transactions/subscriber"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.api.transactions"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	transactions.RegisterTransactionsHandler(service.Server(), new(handler.Transactions))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.transactions", service.Server(), new(subscriber.Transactions))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
