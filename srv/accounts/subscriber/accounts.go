package subscriber

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type AccountApproval struct {
	Client            client.Client
	PubAccountUpdated string
}

func (e *AccountApproval) Handle(ctx context.Context, msg *accounts.AccountApproval) error {
	log.Info("Handler Received message: ", msg.Uuid)

	accountApproved := models.Get(msg.Uuid)
	accountApproved.Status = msg.Status
	models.Update(&accountApproved)

	accountUpdated := accounts.AccountCreatedOrUpdated{
		Uuid:      accountApproved.Uuid,
		Title:     accountApproved.Title,
		Status:    accountApproved.Status,
		Balance:   accountApproved.Balance,
		Timestamp: time.Now().Unix(),
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
func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *accounts.TransactionPlaced) error {
	log.Info("Handler Received message: ", transactionPlaced.Uuid)

	accountDeducted := models.Get(transactionPlaced.Account)
	accountDeducted.Balance = accountDeducted.Balance - transactionPlaced.Amount
	models.Update(&accountDeducted)

	accountUpdated := accounts.AccountCreatedOrUpdated{
		Uuid:      accountDeducted.Uuid,
		Timestamp: time.Now().Unix(),
		Title:     accountDeducted.Title,
		Status:    accountDeducted.Status,
		Balance:   accountDeducted.Balance,
	}

	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}
