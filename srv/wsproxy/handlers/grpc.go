package handlers

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/client/grpc"
	"log"
	wsproxy "srv/wsproxy/proto/wsproxy"
	"time"
)

func CreateGRPCStream(req *wsproxy.StreamRequest) (GRPCStream, error) {
	// New RPC client
	rpcClient := grpc.NewClient(client.RequestTimeout(time.Second * 120))
	cli := wsproxy.NewQueriesService(CQRSService, rpcClient)

	var stream GRPCStream
	var err error
	if req.Uuid == "" {
		stream, err = cli.AccountsOverview(
			context.Background(),
			req,
		)
		if err != nil {
			log.Print(err)
		}
	} else {
		stream, err = cli.AccountDetail(
			context.Background(),
			req,
		)
		if err != nil {
			log.Print(err)
		}
	}
	return stream, err
}


