package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	queries "srv/queries/proto/queries"
)

type Queries struct{}

func (e *Queries) Handle(ctx context.Context, msg *queries.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *queries.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
