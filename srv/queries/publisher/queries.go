package publisher

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	queries "unicornbank.io/srv/queries/proto/queries"
)

func PubGenericEvent(client client.Client, topic string, msg string) error {

	p := micro.NewEvent(topic, client)
	if err := p.Publish(context.TODO(), &queries.GenericEvent{
		Msg: msg,
	}); err != nil {
		return err
	}

	return nil
}
