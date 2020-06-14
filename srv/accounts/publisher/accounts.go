package publisher

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

func PubNewAccount(client client.Client, topic string, title string) error {

	p := micro.NewEvent(topic, client)
	if err := p.Publish(context.TODO(), &accounts.NewAccountEvent{
		Id:        "uuid",
		Timestamp: 123456789,
		Title:     title,
	}); err != nil {
		return err
	}

	return nil
}
