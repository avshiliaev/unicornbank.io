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

	uuID := uuid.New().String()
	account := req.Account
	amount := req.Amount
	models.Create(uuID, account, amount)

	topic := e.PubTransactionPlaced
	AccountCreated := transactions.TransactionPlacedOrUpdated{
		Uuid:      uuID,
		Timestamp: time.Now().Unix(),
		Status:    "pending",
		Account:   account,
		Amount:    amount,
	}
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &AccountCreated); err != nil {
		return err
	}

	rsp.Msg = "created " + uuID

	return nil
}
