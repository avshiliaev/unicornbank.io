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

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *approvals.AccountCreated) error {
	log.Info("Handler Received message: ", accountCreated.Uuid)

	status := "approved"
	accountApproved := approvals.AccountApproval{
		Uuid:      accountCreated.Uuid,
		Timestamp: time.Now().Unix(),
		Status:    status,
	}
	models.Create(&accountApproved)

	topic := e.PubAccountApproval
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountApproved); err != nil {
		return err
	}

	log.Info("Account: ", accountApproved.Uuid, " approved!")

	return nil
}
