package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/notifications/mongodb"
	notifications "unicornbank.io/srv/notifications/proto/notifications"
)

// - Accounts -
type AccountUpdated struct {
	Coll *mongo.Collection
}

func (e *AccountUpdated) Handle(ctx context.Context, accountUpdated *notifications.AccountEvent) error {
	log.Info("Account: ", accountUpdated.Uuid, ", status: ", accountUpdated.Status)
	mongodb.UpdatedAccount(accountUpdated, ctx, e.Coll)
	return nil
}

// - Transactions -
type TransactionUpdated struct {
	Coll *mongo.Collection
}

func (e *TransactionUpdated) Handle(ctx context.Context, transactionUpdated *notifications.TransactionEvent) error {
	log.Info("Transaction: ", transactionUpdated.Uuid, ", status: ", transactionUpdated.Status)
	mongodb.UpdatedTransaction(transactionUpdated, ctx, e.Coll)
	return nil
}
