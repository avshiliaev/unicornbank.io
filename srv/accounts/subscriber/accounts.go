package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type AccountApproval struct {
	Client            client.Client
	PubAccountUpdated string
}

func (e *AccountApproval) Handle(ctx context.Context, msg *accounts.AccountApprovalType) error {
	log.Info("Handler Received message: ", msg.Uuid)

	account := models.Get(msg.Uuid)
	account.Status = msg.Status
	models.Update(&account)

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

type TransactionPlaced struct {
	Client            client.Client
	PubAccountUpdated string
}

// TODO a good place for the saga pattern:
// The transaction is deducted RIGHT away, but then can be compensated if not processed by billing
func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *accounts.TransactionType) error {
	log.Info("Handler Received message: ", transactionPlaced.Uuid)

	account := models.Get(transactionPlaced.Account)
	account.Balance = account.Balance + transactionPlaced.Amount
	models.Update(&account)

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
