package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type Transactions struct{}

func (e *Transactions) Handle(ctx context.Context, msg *transactions.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *transactions.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
