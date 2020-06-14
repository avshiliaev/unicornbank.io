package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type Accounts struct{}

func (e *Accounts) Handle(ctx context.Context, msg *accounts.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *accounts.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
