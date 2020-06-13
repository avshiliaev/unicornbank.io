package handler

import (
	"context"

	log "github.com/micro/go-micro/v2/logger"

	entities "lagerist.io/srv/entities/proto/entities"
)

type Entities struct{}

// Call is a single request handler called via client.Call or the generated client code
func (e *Entities) Call(ctx context.Context, req *entities.Request, rsp *entities.Response) error {
	log.Info("Received Entities.Call request")
	rsp.Msg = "Hello " + req.Name
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Entities) Stream(ctx context.Context, req *entities.StreamingRequest, stream entities.Entities_StreamStream) error {
	log.Infof("Received Entities.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&entities.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Entities) PingPong(ctx context.Context, stream entities.Entities_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&entities.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
