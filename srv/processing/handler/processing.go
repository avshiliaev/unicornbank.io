package handler

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	processing "unicornbank.io/srv/processing/proto/processing"
)

type Processing struct {
	Client client.Client
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Processing) Call(ctx context.Context, req *processing.Request, rsp *processing.Response) error {
	log.Info("Received Processing.Call request")
	rsp.Msg = "Hello " + req.Name
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Processing) Stream(ctx context.Context, req *processing.StreamingRequest, stream processing.Processing_StreamStream) error {
	log.Infof("Received Processing.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&processing.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Processing) PingPong(ctx context.Context, stream processing.Processing_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&processing.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
