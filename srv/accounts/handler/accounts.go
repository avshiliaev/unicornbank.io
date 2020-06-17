package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type Accounts struct {
	Client            client.Client
	PubAccountCreated string
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Accounts) Create(ctx context.Context, req *accounts.RequestType, rsp *accounts.AccountType) error {

	log.Info("Received Accounts.Create request")

	accountCreated := accounts.AccountType{
		Uuid:      uuid.New().String(),
		Title:     req.Title,
		Status:    "pending",
		Balance:   float32(0.0),
	}

	models.Create(&accountCreated)

	topic := e.PubAccountCreated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &accountCreated); err != nil {
		return err
	}

	rsp.Uuid = accountCreated.Uuid
	rsp.Title = accountCreated.Title
	rsp.Status = accountCreated.Status
	rsp.Balance = accountCreated.Balance

	return nil
}
