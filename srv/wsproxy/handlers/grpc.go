package handlers

import (
	"context"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/client/grpc"
	"log"
	wsproxy "srv/wsproxy/proto/wsproxy"
	"time"
)

func CreateAccountsStream(req *wsproxy.AccountsStreamRequest) (AccountsStream, error) {
	// New RPC client
	rpcClient := grpc.NewClient(client.RequestTimeout(time.Second * 120))
	cli := wsproxy.NewProfilesService(ProfilesService, rpcClient)

	var stream AccountsStream
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

func CreateNotificationsStream(req *wsproxy.NotificationsStreamRequest) (NotificationsStream, error) {
	// New RPC client
	rpcClient := grpc.NewClient(client.RequestTimeout(time.Second * 120))
	cli := wsproxy.NewNotificationsService(NotificationsService, rpcClient)

	var stream NotificationsStream
	var err error
	stream, err = cli.Overview(
		context.Background(),
		req,
	)
	if err != nil {
		log.Print(err)
	}
	return stream, err
}

