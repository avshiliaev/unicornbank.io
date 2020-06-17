package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/models"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type AccountCreated struct{}

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *queries.AccountType) error {
	log.Info("Account: ", accountCreated.Uuid, ", status: ", accountCreated.Status)
	models.CreateAccount(accountCreated)
	return nil
}

type AccountUpdated struct{}

func (e *AccountUpdated) Handle(ctx context.Context, msg *queries.AccountType) error {
	log.Info("Account: ", msg.Uuid, ", status: ", msg.Status)
	updatedAccount := models.GetAccount(msg.Uuid)
	updatedAccount.Status = msg.Status
	updatedAccount.Balance = msg.Balance
	updatedAccount.Title = msg.Title
	models.UpdateAccount(&updatedAccount)
	return nil
}

type TransactionPlaced struct{}

func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *queries.TransactionType) error {
	log.Info("Account: ", transactionPlaced.Uuid, ", status: ", transactionPlaced.Status)
	models.CreateTransaction(transactionPlaced)
	return nil
}

type TransactionUpdated struct{}

func (e *TransactionUpdated) Handle(ctx context.Context, msg *queries.TransactionType) error {
	log.Info("Transaction: ", msg.Uuid, ", status: ", msg.Status)
	updatedTransaction := models.GetTransaction(msg.Uuid)
	updatedTransaction.Account = msg.Account
	updatedTransaction.Amount = msg.Amount
	updatedTransaction.Status = msg.Status
	models.UpdateTransaction(&updatedTransaction)
	return nil
}
