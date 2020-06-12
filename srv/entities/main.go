package main

import (
	"context"
	"fmt"

	micro "github.com/micro/go-micro/v2"
	proto "lagerist.io/srv/entities/proto"

	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

type Entities struct{}

func (g *Entities) CreateEntity(ctx context.Context, req *proto.EntitiesRequest, rsp *proto.EntitiesResponse) error {
	rsp.Msg = "created entity: " + req.Title
	return nil
}

func main() {
	// Create a new service. Optionally include some options here.
	service := micro.NewService(
		micro.Name("lagerist-io-srv-entities"),
	)

	// Init will parse the command line flags.
	service.Init()

	// Register handler
	if err := proto.RegisterEntitiesHandler(service.Server(), new(Entities)); err != nil {
		fmt.Println(err)
	}

	// Run the server
	if err := service.Run(); err != nil {
		fmt.Println(err)
	}
}
