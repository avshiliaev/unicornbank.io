package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"
	"unicornbank.io/srv/transactions/models"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type TransactionProcessed struct {
	Client                client.Client
	PubTransactionUpdated string
}

func (e *TransactionProcessed) Handle(ctx context.Context, msg *transactions.TransactionProcessed) error {
	log.Info("Handler Received message: ", msg.Uuid)

	transactionProcessed := models.Get(msg.Uuid)
	transactionProcessed.Status = msg.Status
	models.Update(&transactionProcessed)

	transactionUpdated := transactions.TransactionPlacedOrUpdated{
		Uuid:      transactionProcessed.Uuid,
		Timestamp: time.Now().Unix(),
		Account:   transactionProcessed.Account,
		Amount:    transactionProcessed.Amount,
		Status:    transactionProcessed.Status,
	}

	topic := e.PubTransactionUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &transactionUpdated); err != nil {
		return err
	}

	log.Info("Account: ", transactionUpdated.Uuid, " updated!")

	return nil
}
