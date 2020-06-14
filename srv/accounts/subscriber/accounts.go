package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type Accounts struct{}

func (e *Accounts) Handle(ctx context.Context, msg *accounts.GenericEvent) error {
	log.Info("Handler Received message: ", msg.Msg)
	return nil
}

func Handler(ctx context.Context, msg *accounts.GenericEvent) error {
	log.Info("Function Received message: ", msg.Msg)
	return nil
}
