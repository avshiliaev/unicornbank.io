package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/approvals/mongodb"
	approvals "unicornbank.io/srv/approvals/proto/approvals"
)

type AccountCreated struct {
	Client             client.Client
	PubAccountApproval string
	Coll               *mongo.Collection
}

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *approvals.AccountType) error {
	log.Info("Handler Received message: ", accountCreated.Uuid)

	status := "approved"
	accountApproved := approvals.AccountType{
		Uuid:   accountCreated.Uuid,
		Status: status,
	}
	mongodb.CreateOne(&accountApproved, ctx, e.Coll)

	topic := e.PubAccountApproval
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountApproved); err != nil {
		return err
	}

	log.Info("Account: ", accountApproved.Uuid, " approved!")

	return nil
}
