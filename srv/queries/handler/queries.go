package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct{}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Queries) AccountsOverviewStream(ctx context.Context, req *queries.StreamingRequest, stream queries.Queries_AccountsOverviewStreamStream) error {
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

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Queries) AccountDetailStream(ctx context.Context, req *queries.StreamingRequest, stream queries.Queries_AccountDetailStreamStream) error {
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
