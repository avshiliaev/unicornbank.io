package main

import (
	"context"
	"fmt"

	"github.com/micro/go-micro/v2"
	proto "lagerist.io/srv/processing/proto"

	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

type Processing struct{}

func (g *Processing) ProcessingEntity(ctx context.Context, req *proto.ProcessingEntityRequest, rsp *proto.ProcessingEntityResponse) error {
	rsp.Msg = "processing: " + req.Title
	return nil
}

func main() {
	// Create a new service. Optionally include some options here.
	service := micro.NewService(
		micro.Name("lagerist-io-srv-processing"),
	)

	// Init will parse the command line flags.
	service.Init()

	// Register handler
	if err := proto.RegisterProcessingHandler(service.Server(), new(Processing)); err != nil {
		fmt.Println(err)
	}

	// Run the server
	if err := service.Run(); err != nil {
		fmt.Println(err)
	}
}
