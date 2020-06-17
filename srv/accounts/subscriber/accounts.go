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

	accountUpdated := accounts.AccountCreatedOrUpdated{
		Uuid:      accountApproved.Uuid,
		Timestamp: msg.Timestamp,
		Title:     accountApproved.Title,
		Status:    msg.Status,
		Balance:   accountApproved.Balance,
	}
	models.Update(&accountUpdated)

	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}

type TransactionProcessed struct {
	Client            client.Client
	PubAccountUpdated string
}

func (e *TransactionProcessed) Handle(ctx context.Context, transactionProcessed *accounts.TransactionProcessed) error {
	log.Info("Handler Received message: ", transactionProcessed.Uuid)

	// TODO do only if transaction is successfully processed!
	accountDeducted := models.Get(transactionProcessed.Account)

	log.Info("deduct from THIS account!: ", accountDeducted)

	accountUpdated := accounts.AccountCreatedOrUpdated{
		Uuid:      accountDeducted.Uuid,
		Timestamp: time.Now().Unix(),
		Title:     accountDeducted.Title,
		Status:    accountDeducted.Status,
		Balance:   accountDeducted.Balance - transactionProcessed.Amount,
	}
	models.Update(&accountUpdated)

	topic := e.PubAccountUpdated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountUpdated); err != nil {
		return err
	}

	log.Info("Account: ", accountUpdated.Uuid, " updated!")

	return nil
}
