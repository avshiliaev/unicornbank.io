package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	projects "lagerist.io/srv/projects/proto/projects"
)

type Projects struct{}

func (e *Projects) Handle(ctx context.Context, msg *projects.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *projects.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
