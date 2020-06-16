package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"
	"unicornbank.io/srv/approvals/models"
	approvals "unicornbank.io/srv/approvals/proto/approvals"
)

type AccountCreated struct {
	Client             client.Client
	PubAccountApproval string
}

func (e *AccountCreated) Handle(ctx context.Context, msg *approvals.AccountCreated) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	var status string

	// TODO business logic injected here
	status = "approved"
	models.Create(uuId, status)

	topic := e.PubAccountApproval
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &approvals.AccountApproval{
		Uuid:      uuId,
		Timestamp: time.Now().Unix(),
		Status:    status,
	}); err != nil {
		return err
	}

	log.Info("Account: ", uuId, " approved!")

	return nil
}
