package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
	"unicornbank.io/srv/transactions/mongodb"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type Transactions struct {
	Client               client.Client
	PubTransactionPlaced string
	Coll                 *mongo.Collection
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Transactions) Create(
	ctx context.Context, req *transactions.TransactionType, rsp *transactions.TransactionType,
) error {
	log.Info("Received Transactions.Create request")

	transaction := transactions.TransactionType{
		Account:   req.Account,
		Amount:    req.Amount,
		Info:      req.Info,
		Status:    "pending",
		Timestamp: time.Now().Unix(),
		Uuid:      uuid.New().String(),
	}
	mongodb.CreateOne(&transaction, ctx, e.Coll)

	topic := e.PubTransactionPlaced
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &transaction); err != nil {
		return err
	}

	rsp.Uuid = transaction.Uuid

	return nil
}
