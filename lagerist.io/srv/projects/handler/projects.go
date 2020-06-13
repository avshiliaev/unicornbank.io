package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"lagerist.io/srv/projects/models"
	projects "lagerist.io/srv/projects/proto/projects"
)

type Projects struct{}

// Call is a single request handler called via client.Call or the generated client code
func (e *Projects) Create(ctx context.Context, req *projects.Request, rsp *projects.Response) error {
	log.Info("Received Projects.Call request")

	models.Create(req.Title)
	// Emit an event here?

	rsp.Msg = "created " + req.Title
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Projects) Stream(ctx context.Context, req *projects.StreamingRequest, stream projects.Projects_StreamStream) error {
	log.Infof("Received Projects.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&projects.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Projects) PingPong(ctx context.Context, stream projects.Projects_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&projects.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
