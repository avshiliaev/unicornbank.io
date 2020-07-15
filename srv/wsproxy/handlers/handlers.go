package handlers

import (
	"context"
	wsproxy "srv/wsproxy/proto/wsproxy"
)

var ProfilesService = "go.micro.api.profiles"
var NotificationsService = "go.micro.api.notifications"

type AccountsStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Recv() (*wsproxy.AccountsStreamResponse, error)
}
type NotificationsStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Recv() (*wsproxy.NotificationsStreamResponse, error)
}
