package main

import (
	"github.com/micro/go-micro/v2"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/handler"
	queries "unicornbank.io/srv/queries/proto/queries"
	"unicornbank.io/srv/queries/subscriber"
)

func main() {
	// New Service
	service := micro.NewService(
		micro.Name("go.micro.service.queries"),
		micro.Version("latest"),
	)

	// Initialise service
	service.Init()

	// Register Handler
	queries.RegisterQueriesHandler(service.Server(), new(handler.Queries))

	// Register Struct as Subscriber
	micro.RegisterSubscriber("go.micro.service.queries", service.Server(), new(subscriber.Queries))

	// Run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
