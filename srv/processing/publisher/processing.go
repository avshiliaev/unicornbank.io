package publisher

import (
	"context"
	"github.com/micro/go-micro/v2"
	"github.com/micro/go-micro/v2/client"
	"time"
	processing "unicornbank.io/srv/processing/proto/processing"
)

func PubAccountApproval(client client.Client, topic string, Uuid string, status string) error {

	p := micro.NewEvent(topic, client)
	if err := p.Publish(context.TODO(), &processing.AccountApproval{
		Uuid:      Uuid,
		Timestamp: time.Now().Unix(),
		Status:    status,
	}); err != nil {
		return err
	}

	return nil
}
