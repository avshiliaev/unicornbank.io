package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	processing "lagerist.io/srv/processing/proto/processing"
)

type Processing struct{}

func (e *Processing) Handle(ctx context.Context, msg *processing.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *processing.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
