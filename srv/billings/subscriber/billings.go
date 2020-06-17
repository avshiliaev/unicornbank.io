package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/billings/models"
	billings "unicornbank.io/srv/billings/proto/billings"
)

type TransactionPlaced struct {
	Client                  client.Client
	PubTransactionProcessed string
}

func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *billings.TransactionType) error {
	log.Info("Handler Received message: ", transactionPlaced.Uuid)

	status := "processed"
	transactionProcessed := billings.TransactionProcessedType{
		Uuid:      transactionPlaced.Uuid,
		Status:    status,
	}
	models.Create(&transactionProcessed)

	topic := e.PubTransactionProcessed
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &transactionProcessed); err != nil {
		return err
	}

	log.Info("Transaction: ", transactionProcessed.Uuid, " processed")

	return nil
}
