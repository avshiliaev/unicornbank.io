package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type AccountUpdated struct{}

func (e *AccountUpdated) Handle(ctx context.Context, msg *queries.AccountUpdated) error {
	log.Info("Account: ", msg.Uuid, ", status: ", msg.Status)
	return nil
}

type TransactionUpdated struct{}

func (e *TransactionUpdated) Handle(ctx context.Context, msg *queries.TransactionUpdated) error {
	log.Info("Transaction: ", msg.Uuid, ", status: ", msg.Status)
	return nil
}
