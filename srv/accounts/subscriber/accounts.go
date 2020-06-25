package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/mongodb"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type AccountApproval struct {
	Client            client.Client
	PubAccountUpdated string
}

func (e *AccountApproval) Handle(ctx context.Context, msg *accounts.AccountApprovalType) error {
	log.Info("Handler Received message: ", msg.Uuid)

	coll, mongoCtx := mongodb.Collection()

	accountUpdated := mongodb.GetOne(msg.Uuid, coll, mongoCtx)
	accountUpdated.Status = msg.Status

	mongodb.UpdateOne(msg.Uuid, &accountUpdated, coll, mongoCtx)

	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}

type TransactionPlaced struct {
	Client            client.Client
	PubAccountUpdated string
}

// TODO a good place for the saga pattern:
// The transaction is deducted RIGHT away, but then can be compensated if not processed by billing
func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *accounts.TransactionType) error {
	log.Info("Handler Received message: ", transactionPlaced.Uuid)

	coll, mongoCtx := mongodb.Collection()

	account := mongodb.GetOne(transactionPlaced.Account, coll, mongoCtx)
	account.Balance = account.Balance + transactionPlaced.Amount

	mongodb.UpdateOne(account.Uuid, &account, coll, mongoCtx)

	accountUpdated := accounts.AccountType{
		Uuid:    account.Uuid,
		Title:   account.Title,
		Status:  account.Status,
		Balance: account.Balance,
	}

	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}
