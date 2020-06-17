package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct {}

// Call is a single request handler called via client.Call or the generated client code
func (e *Queries) Call(ctx context.Context, req *queries.Request, rsp *queries.Response) error {
	log.Info("Received Queries.Call request")
	rsp.Msg = "Hello " + req.Name
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Queries) Stream(ctx context.Context, req *queries.StreamingRequest, stream queries.Queries_StreamStream) error {
	log.Infof("Received Queries.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&queries.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Queries) PingPong(ctx context.Context, stream queries.Queries_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&queries.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}