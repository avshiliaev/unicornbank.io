package handlers

import (
	"context"
	wsproxy "srv/wsproxy/proto/wsproxy"
)

var CQRSService = "go.micro.api.queries"

type GRPCStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Recv() (*wsproxy.StreamResponse, error)
}
