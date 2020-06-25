package handler

import (
	"context"
	"github.com/google/uuid"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/accounts/mongodb"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

type Accounts struct {
	Client            client.Client
	PubAccountCreated string
	Coll              *mongo.Collection
}

// Call is a single request handler called via client.Call or the generated client code
func (e *Accounts) Create(ctx context.Context, req *accounts.RequestType, rsp *accounts.ResponseType) error {

	log.Info("Received Accounts.Create request")

	account := accounts.AccountType{
		Uuid:    uuid.New().String(),
		Title:   req.Title,
		Status:  "pending",
		Balance: float32(0.0),
	}

	mongodb.CreateOne(&account, e.Coll)

	topic := e.PubAccountCreated
	p := micro.NewEvent(topic, e.Client)
	if err := p.Publish(context.TODO(), &account); err != nil {
		return err
	}

	rsp.Uuid = account.Uuid

	return nil
}
