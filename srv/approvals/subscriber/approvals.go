package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
	"unicornbank.io/srv/approvals/mongodb"
	approvals "unicornbank.io/srv/approvals/proto/approvals"
)

type AccountCreated struct {
	Client             client.Client
	PubAccountApproval string
	Coll               *mongo.Collection
}

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *approvals.AccountEvent) error {
	log.Info("Handler Received message: ", accountCreated.Uuid)

	time.Sleep(2 * time.Second)
	status := "approved"
	accountApproved := approvals.AccountEvent{
		Status: status,
		Uuid:   accountCreated.Uuid,
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
