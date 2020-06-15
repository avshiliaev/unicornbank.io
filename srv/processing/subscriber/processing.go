package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/processing/models"

	processing "unicornbank.io/srv/processing/proto/processing"
)

type Processing struct{}

func (e *Processing) Handle(ctx context.Context, msg *processing.NewAccountCreated) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	title := msg.Title
	var status string
	status = "approved"
	models.Create(uuId, title, status)

	log.Info("Account: ", uuId, " approved!")

	return nil
}

func Handler(ctx context.Context, msg *processing.NewAccountCreated) error {
	log.Info("Function Received message: ", msg.Title)
	return nil
}
