package handler

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
	"unicornbank.io/srv/accounts/publisher"
)

type Accounts struct {
	Client client.Client
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Accounts) Create(ctx context.Context, req *accounts.Request, rsp *accounts.Response) error {
	log.Info("Received Accounts.Call request")

	models.Create(req.Title)
	publisher.Pub(e.Client, "go.micro.service.processing", "accountCreated")
	rsp.Msg = "created " + req.Title

	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Accounts) Stream(ctx context.Context, req *accounts.StreamingRequest, stream accounts.Accounts_StreamStream) error {
	log.Infof("Received Accounts.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&accounts.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Accounts) PingPong(ctx context.Context, stream accounts.Accounts_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&accounts.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
