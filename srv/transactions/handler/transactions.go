package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type Transactions struct{}

// Call is a single request handler called via client.Call or the generated client code
func (e *Transactions) Call(ctx context.Context, req *transactions.Request, rsp *transactions.Response) error {
	log.Info("Received Transactions.Call request")
	rsp.Msg = "Hello " + req.Name
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Transactions) Stream(ctx context.Context, req *transactions.StreamingRequest, stream transactions.Transactions_StreamStream) error {
	log.Infof("Received Transactions.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&transactions.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Transactions) PingPong(ctx context.Context, stream transactions.Transactions_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&transactions.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
