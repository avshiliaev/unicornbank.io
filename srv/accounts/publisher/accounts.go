package publisher

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

func Pub(client client.Client, topic string, body string) error {

	p := micro.NewEvent(topic, client)
	if err := p.Publish(context.TODO(), &accounts.Message{Say: body}); err != nil {
		return err
	}

	return nil
}
