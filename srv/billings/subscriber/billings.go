package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"
	"unicornbank.io/srv/billings/models"
	billings "unicornbank.io/srv/billings/proto/billings"
)

type TransactionPlaced struct {
	Client                  client.Client
	PubTransactionProcessed string
}

func (e *TransactionPlaced) Handle(ctx context.Context, msg *billings.TransactionPlaced) error {
	log.Info("Handler Received message: ", msg.Uuid)

	uuId := msg.Uuid
	var status string

	// TODO business logic injected here
	status = "processed"
	models.Create(uuId, status)

	topic := e.PubTransactionProcessed
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &billings.TransactionProcessed{
		Uuid:      uuId,
		Timestamp: time.Now().Unix(),
		Status:    status,
	}); err != nil {
		return err
	}

	log.Info("Transaction: ", uuId, " processed")

	return nil
}
