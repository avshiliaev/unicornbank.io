package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/processing/models"
	processing "unicornbank.io/srv/processing/proto/processing"
	"unicornbank.io/srv/processing/publisher"
)

type AccountCreated struct {
	Client client.Client
	PubAccountApproval string
}

func (e *AccountCreated) Handle(ctx context.Context, msg *processing.AccountCreated) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	var status string

	// TODO business logic injected here
	status = "approved"
	models.Create(uuId, status)

	topic := e.PubAccountApproval
	if err := publisher.PubAccountApproval(e.Client, topic, uuId, status); err != nil {
		return err
	}

	log.Info("Account: ", uuId, " approved!")

	return nil
}
