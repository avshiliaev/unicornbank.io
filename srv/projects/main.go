package main

import (
	"context"
	"fmt"

	micro "github.com/micro/go-micro/v2"
	proto "lagerist.io/srv/projects/proto"

	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

type Projects struct{}

func (g *Projects) CreateProject(ctx context.Context, req *proto.ProjectsRequest, rsp *proto.ProjectsResponse) error {
	rsp.Msg = "created project: " + req.Title
	return nil
}

func main() {
	// Create a new service. Optionally include some options here.
	service := micro.NewService(
		micro.Name("lagerist-io-srv-projects"),
	)

	// Init will parse the command line flags.
	service.Init()

	// Register handler
	if err := proto.RegisterProjectsHandler(service.Server(), new(Projects)); err != nil {
		fmt.Println(err)
	}

	// Run the server
	if err := service.Run(); err != nil {
		fmt.Println(err)
	}
}
