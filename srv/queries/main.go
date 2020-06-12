package main

import (
	"context"
	"fmt"

	micro "github.com/micro/go-micro/v2"
	proto "lagerist.io/srv/queries/proto"

	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

type Queries struct{}

func (g *Queries) QueryingSomething(ctx context.Context, req *proto.QueriesRequest, rsp *proto.QueriesResponse) error {
	rsp.Msg = "querying: " + req.Title
	return nil
}

func main() {
	// Create a new service. Optionally include some options here.
	service := micro.NewService(
		micro.Name("lagerist-io-srv-queries"),
	)

	// Init will parse the command line flags.
	service.Init()

	// Register handler
	if err := proto.RegisterQueriesHandler(service.Server(), new(Queries)); err != nil {
		fmt.Println(err)
	}

	// Run the server
	if err := service.Run(); err != nil {
		fmt.Println(err)
	}
}
