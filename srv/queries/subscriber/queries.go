package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/models"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type AccountCreated struct{}

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *queries.AccountCreated) error {
	log.Info("Account: ", accountCreated.Uuid, ", status: ", accountCreated.Status)
	models.CreateAccount(accountCreated)
	return nil
}

type AccountUpdated struct{}

func (e *AccountUpdated) Handle(ctx context.Context, accountUpdated *queries.AccountUpdated) error {
	log.Info("Account: ", accountUpdated.Uuid, ", status: ", accountUpdated.Status)
	models.UpdateAccount(accountUpdated)
	return nil
}

type TransactionPlaced struct{}

func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *queries.TransactionPlaced) error {
	log.Info("Account: ", transactionPlaced.Uuid, ", status: ", transactionPlaced.Status)
	models.CreateTransaction(transactionPlaced)
	return nil
}

type TransactionUpdated struct{}

func (e *TransactionUpdated) Handle(ctx context.Context, transactionUpdated *queries.TransactionUpdated) error {
	log.Info("Account: ", transactionUpdated.Uuid, ", status: ", transactionUpdated.Status)
	models.UpdateTransaction(transactionUpdated)
	return nil
}
