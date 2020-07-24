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

func (e *AccountCreated) Handle(ctx context.Context, accountCreated *profiles.AccountEvent) error {
	log.Info("AccountCreated: ", accountCreated.Uuid, ", status: ", accountCreated.Status)
	mongodb.CreateAccount(accountCreated, ctx, e.Coll)
	return nil
}

type AccountUpdated struct {
	Coll *mongo.Collection
}

func (e *AccountUpdated) Handle(ctx context.Context, accountUpdated *profiles.AccountEvent) error {
	log.Info("AccountUpdated: ", accountUpdated.Uuid, ", status: ", accountUpdated.Status)
	mongodb.UpdateAccount(accountUpdated, ctx, e.Coll)
	return nil
}

// - Transactions -
type TransactionPlaced struct {
	Coll *mongo.Collection
}

func (e *TransactionPlaced) Handle(ctx context.Context, transactionPlaced *profiles.TransactionEvent) error {
	log.Info("TransactionPlaced: ", transactionPlaced.Uuid, ", status: ", transactionPlaced.Status)
	mongodb.CreateTransaction(transactionPlaced, ctx, e.Coll)
	return nil
}

type TransactionUpdated struct {
	Coll *mongo.Collection
}

func (e *TransactionUpdated) Handle(ctx context.Context, transactionUpdated *profiles.TransactionEvent) error {
	log.Info("TransactionUpdated: ", transactionUpdated.Uuid, ", status: ", transactionUpdated.Status)
	mongodb.UpdateTransaction(transactionUpdated, ctx, e.Coll)
	return nil
}
