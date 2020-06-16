package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"

	// "unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type AccountApproval struct {
	Client            client.Client
	PubAccountUpdated string
}

func (e *AccountApproval) Handle(ctx context.Context, msg *accounts.AccountApproval) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	var status string
	status = msg.Status

	// TODO: Update in self database and get the rest of the info
	// models.Update(uuId, title, status)
	title := "TITLE"

	topic := e.PubAccountUpdated
	AccountUpdated := accounts.AccountCreatedOrUpdated{
		Uuid:      uuId,
		Timestamp: time.Now().Unix(),
		Title:     title,
		Status:    status,
	}
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &AccountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", uuId, " updated!")

	return nil
}
