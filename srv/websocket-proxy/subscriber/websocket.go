package subscriber

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"

	websocket "srv/websocket-proxy/proto/websocket"
)

type Websocket struct{}

func (e *Websocket) Handle(ctx context.Context, msg *websocket.Message) error {
	log.Info("Handler Received message: ", msg.Say)
	return nil
}

func Handler(ctx context.Context, msg *websocket.Message) error {
	log.Info("Function Received message: ", msg.Say)
	return nil
}
