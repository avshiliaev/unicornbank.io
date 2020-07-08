package handler

import (
	"context"

	log "github.com/micro/go-micro/v2/logger"

	websocket "srv/websocket-proxy/proto/websocket"
)

type Websocket struct{}

// Call is a single request handler called via client.Call or the generated client code
func (e *Websocket) Call(ctx context.Context, req *websocket.Request, rsp *websocket.Response) error {
	log.Info("Received Websocket.Call request")
	rsp.Msg = "Hello " + req.Name
	return nil
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Websocket) Stream(ctx context.Context, req *websocket.StreamingRequest, stream websocket.Websocket_StreamStream) error {
	log.Infof("Received Websocket.Stream request with count: %d", req.Count)

	for i := 0; i < int(req.Count); i++ {
		log.Infof("Responding: %d", i)
		if err := stream.Send(&websocket.StreamingResponse{
			Count: int64(i),
		}); err != nil {
			return err
		}
	}

	return nil
}

// PingPong is a bidirectional stream handler called via client.Stream or the generated client code
func (e *Websocket) PingPong(ctx context.Context, stream websocket.Websocket_PingPongStream) error {
	for {
		req, err := stream.Recv()
		if err != nil {
			return err
		}
		log.Infof("Got ping %v", req.Stroke)
		if err := stream.Send(&websocket.Pong{Stroke: req.Stroke}); err != nil {
			return err
		}
	}
}
