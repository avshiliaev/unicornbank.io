package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"
	"unicornbank.io/srv/transactions/models"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type Transactions struct {
	Client               client.Client
	PubTransactionPlaced string
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Transactions) Create(ctx context.Context, req *transactions.Request, rsp *transactions.Response) error {
	log.Info("Received Transactions.Create request")

	transactionPlaced := transactions.TransactionPlacedOrUpdated{
		Uuid:      uuid.New().String(),
		Timestamp: time.Now().Unix(),
		Status:    "pending",
		Account:   req.Account,
		Amount:    req.Amount,
	}
	models.Create(&transactionPlaced)

	topic := e.PubTransactionPlaced
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &transactionPlaced); err != nil {
		return err
	}

	rsp.Msg = "created " + transactionPlaced.Uuid

	return nil
}
