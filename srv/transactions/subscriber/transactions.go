package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/transactions/mongodb"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type TransactionProcessed struct {
	Client                client.Client
	PubTransactionUpdated string
	Coll                  *mongo.Collection
}

func (e *TransactionProcessed) Handle(ctx context.Context, msg *transactions.TransactionType) error {
	log.Info("Handler Received message: ", msg.Uuid)

	transactionProcessed := mongodb.GetOne(msg.Uuid, ctx, e.Coll)
	transactionProcessed.Status = msg.Status

	mongodb.UpdateReplaceOne(transactionProcessed, ctx, e.Coll)

	topic := e.PubTransactionUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), transactionProcessed); err != nil {
		return err
	}

	log.Info("Account: ", transactionProcessed.Uuid, " updated!")

	return nil
}
