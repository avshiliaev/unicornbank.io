package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/profiles/mongodb"
	profiles "unicornbank.io/srv/profiles/proto/profiles"
)

// - Accounts -
type AccountCreated struct {
	Coll *mongo.Collection
}

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *profiles.AccountType) error {
	log.Info("Account: ", accountCreated.Uuid, ", status: ", accountCreated.Status)
	mongodb.CreateAccount(accountCreated, ctx, e.Coll)
	return nil
}

type AccountUpdated struct {
	Coll *mongo.Collection
}

func (e *AccountUpdated) Handle(ctx context.Context, accountUpdated *profiles.AccountType) error {
	log.Info("Account: ", accountUpdated.Uuid, ", status: ", accountUpdated.Status)
	mongodb.UpdateAccount(accountUpdated, ctx, e.Coll)
	return nil
}

// - Transactions -
type TransactionPlaced struct {
	Coll *mongo.Collection
}

func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *profiles.TransactionType) error {
	log.Info("Transaction: ", transactionPlaced.Uuid, ", status: ", transactionPlaced.Status)
	mongodb.CreateTransaction(transactionPlaced, ctx, e.Coll)
	return nil
}

type TransactionUpdated struct {
	Coll *mongo.Collection
}

func (e *TransactionUpdated) Handle(ctx context.Context, transactionUpdated *profiles.TransactionType) error {
	log.Info("Transaction: ", transactionUpdated.Uuid, ", status: ", transactionUpdated.Status)
	mongodb.UpdateTransaction(transactionUpdated, ctx, e.Coll)
	return nil
}
