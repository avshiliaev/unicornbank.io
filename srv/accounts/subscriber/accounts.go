package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	// "unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
	"unicornbank.io/srv/accounts/publisher"
)

type AccountApproval struct {
	Client            client.Client
	PubAccountUpdated string
}

func (e *AccountApproval) Handle(ctx context.Context, msg *accounts.AccountApproval) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	var status string
	status = "approved"

	// TODO: Update in self database and get the rest of the info
	// models.Update(uuId, title, status)
	title := "TITLE"

	topic := e.PubAccountUpdated
	if err := publisher.PubAccountUpdated(e.Client, topic, uuId, title, status); err != nil {
		return err
	}

	log.Info("Account: ", uuId, " updated!")

	return nil
}
