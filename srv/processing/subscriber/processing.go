package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/processing/models"
	processing "unicornbank.io/srv/processing/proto/processing"
	"unicornbank.io/srv/processing/publisher"
)

type AccountUpdated struct {
	Client client.Client
	PubAccountApproval string
}

func (e *AccountUpdated) Handle(ctx context.Context, msg *processing.AccountUpdated) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	title := msg.Title
	var status string

	// TODO business logic injected here
	status = "approved"
	models.Create(uuId, title, status)

	topic := e.PubAccountApproval
	if err := publisher.PubAccountApproval(e.Client, topic, uuId, title, status); err != nil {
		return err
	}

	log.Info("Account: ", uuId, " approved!")

	return nil
}
