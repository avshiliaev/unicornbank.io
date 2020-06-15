package publisher

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	"time"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

func PubNewAccountCreated(client client.Client, topic string, Uuid string, title string) error {

	p := micro.NewEvent(topic, client)
	if err := p.Publish(context.TODO(), &accounts.NewAccountCreated{
		Uuid:      Uuid,
		Timestamp: time.Now().Unix(),
		Title:     title,
		Status:    "pending",
	}); err != nil {
		return err
	}

	return nil
}
