package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	processing "unicornbank.io/srv/processing/proto/processing"
)

type Processing struct{}

func (e *Processing) Handle(ctx context.Context, msg *processing.NewAccountEvent) error {
	log.Info("Handler Received message: ", msg.Title)
	return nil
}

func Handler(ctx context.Context, msg *processing.NewAccountEvent) error {
	log.Info("Function Received message: ", msg.Title)
	return nil
}
