package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/accounts/mongodb"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type AccountApproval struct {
	Client            client.Client
	PubAccountUpdated string
	Coll              *mongo.Collection
}

func (e *AccountApproval) Handle(ctx context.Context, msg *accounts.AccountEvent) error {
	log.Info("Handler Received message: ", msg.Uuid)

	accountUpdated := mongodb.GetOne(msg.Uuid, ctx, e.Coll)
	accountUpdated.Status = msg.Status

	mongodb.UpdateReplaceOne(accountUpdated, ctx, e.Coll)
	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), accountUpdated); err != nil {
		return err
	}
	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}

type TransactionPlaced struct {
	Client            client.Client
	PubAccountUpdated string
	Coll              *mongo.Collection
}

// TODO a good place for the saga pattern:
// The transaction is deducted RIGHT away, but then can be compensated if not processed by billing
func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *accounts.TransactionEvent) error {
	log.Info("Handler Received message: ", transactionPlaced.Uuid)

	account := mongodb.GetOne(transactionPlaced.Account, ctx, e.Coll)
	account.Balance = account.Balance + transactionPlaced.Amount

	mongodb.UpdateReplaceOne(account, ctx, e.Coll)

	accountUpdated := accounts.AccountEvent{
		Balance: account.Balance,
		Profile: account.Profile,
		Status:  account.Status,
		Uuid:    account.Uuid,
	}

	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}
