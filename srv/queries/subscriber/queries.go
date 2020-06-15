package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct{}

func (e *Queries) Handle(ctx context.Context, msg *queries.GenericEvent) error {
	log.Info("Handler Received message: ", msg.Msg)
	return nil
}

func Handler(ctx context.Context, msg *queries.GenericEvent) error {
	log.Info("Function Received message: ", msg.Msg)
	return nil
}
