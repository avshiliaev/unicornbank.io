package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
	"unicornbank.io/srv/billings/mongodb"
	billings "unicornbank.io/srv/billings/proto/billings"
)

type TransactionCreated struct {
	Client                 client.Client
	PubTransactionApproval string
	Coll                   *mongo.Collection
}

func (e *TransactionCreated) Handle(ctx context.Context, transactionCreated *billings.TransactionEvent) error {
	log.Info("Handler Received message: ", transactionCreated.Uuid)

	time.Sleep(2 * time.Second)
	status := "processed"
	transactionProcessed := billings.TransactionEvent{
		Account: transactionCreated.Account,
		Status:  status,
		Uuid:    transactionCreated.Uuid,
	}
	mongodb.CreateOne(&transactionProcessed, ctx, e.Coll)

	topic := e.PubTransactionApproval
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &transactionProcessed); err != nil {
		return err
	}

	log.Info("Transaction: ", transactionProcessed.Uuid, " processed!")

	return nil
}
