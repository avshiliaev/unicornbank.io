package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/models"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type AccountCreated struct{}

func (e *AccountCreated) Handle(ctx context.Context, msg *queries.AccountCreated) error {
	log.Info("Account: ", msg.Uuid, ", status: ", msg.Status)
	models.CreateAccount(msg.Uuid, msg.Title, msg.Status, msg.Balance)
	return nil
}

type AccountUpdated struct{}

func (e *AccountUpdated) Handle(ctx context.Context, msg *queries.AccountUpdated) error {
	log.Info("Account: ", msg.Uuid, ", status: ", msg.Status)
	models.UpdateAccount(msg.Uuid, msg.Title, msg.Status, msg.Balance)
	return nil
}

type TransactionPlaced struct{}

func (e *TransactionPlaced) Handle(ctx context.Context, msg *queries.TransactionPlaced) error {
	log.Info("Account: ", msg.Uuid, ", status: ", msg.Status)
	models.CreateTransaction(msg.Uuid, msg.Account, msg.Amount, msg.Status)
	return nil
}

type TransactionUpdated struct{}

func (e *TransactionUpdated) Handle(ctx context.Context, msg *queries.TransactionUpdated) error {
	log.Info("Account: ", msg.Uuid, ", status: ", msg.Status)
	models.UpdateTransaction(msg.Uuid, msg.Amount, msg.Status)
	return nil
}
