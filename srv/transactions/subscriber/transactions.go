package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type Transactions struct{}

func (e *Transactions) Handle(ctx context.Context, msg *transactions.GenericEvent) error {
	log.Info("Handler Received message: ", msg.Msg)
	return nil
}

func Handler(ctx context.Context, msg *transactions.GenericEvent) error {
	log.Info("Function Received message: ", msg.Msg)
	return nil
}
