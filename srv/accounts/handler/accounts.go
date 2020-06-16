package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"time"
	"unicornbank.io/srv/accounts/models"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type Accounts struct {
	Client            client.Client
	PubAccountCreated string
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Accounts) Create(ctx context.Context, req *accounts.Request, rsp *accounts.Response) error {
	log.Info("Received Accounts.Create request")

	title := req.Title
	uuID := uuid.New().String()
	var balance float32
	balance = 0.0
	models.Create(uuID, title, balance)

	topic := e.PubAccountCreated
	AccountCreated := accounts.AccountCreatedOrUpdated{
		Uuid:      uuID,
		Timestamp: time.Now().Unix(),
		Title:     title,
		Status:    "pending",
		Balance:   balance,
	}
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &AccountCreated); err != nil {
		return err
	}

	rsp.Msg = "created " + title

	return nil
}
