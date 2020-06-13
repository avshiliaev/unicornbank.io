package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	entities "lagerist.io/srv/entities/proto/entities"
)

type Entities struct{}

func (e *Entities) Handle(ctx context.Context, msg *entities.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *entities.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
