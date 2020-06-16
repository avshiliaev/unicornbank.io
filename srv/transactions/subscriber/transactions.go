package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"

	// "unicornbank.io/srv/transactions/models"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type TransactionProcessed struct {
	Client            client.Client
	PubTransactionUpdated string
}

func (e *TransactionProcessed) Handle(ctx context.Context, msg *transactions.TransactionProcessed) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	var status string
	status = msg.Status

	// TODO: Update in self database and get the rest of the info
	// models.Update(uuId, title, status)
	account := "TITLE"
	var amount float32
	amount = 1.1

	topic := e.PubTransactionUpdated
	TransactionUpdated := transactions.TransactionPlacedOrUpdated{
		Uuid:      uuId,
		Timestamp: time.Now().Unix(),
		Status:    status,
		Account:   account,
		Amount:    amount,
	}
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &TransactionUpdated); err != nil {
		return err
	}

	log.Info("Transaction: ", uuId, " updated!")

	return nil
}
