// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/queries/queries.proto

package go_micro_service_queries

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

import (
	context "context"
	api "github.com/micro/go-micro/v2/api"
	client "github.com/micro/go-micro/v2/client"
	server "github.com/micro/go-micro/v2/server"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Reference imports to suppress errors if they are not otherwise used.
var _ api.Endpoint
var _ context.Context
var _ client.Option
var _ server.Option

// Api Endpoints for Queries service

func NewQueriesEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Queries service

type QueriesService interface {
	AccountsOverview(ctx context.Context, in *StreamRequest, opts ...client.CallOption) (Queries_AccountsOverviewService, error)
	AccountDetail(ctx context.Context, in *StreamRequest, opts ...client.CallOption) (Queries_AccountDetailService, error)
}

type queriesService struct {
	c    client.Client
	name string
}

func NewQueriesService(name string, c client.Client) QueriesService {
	return &queriesService{
		c:    c,
		name: name,
	}
}

func (c *queriesService) AccountsOverview(ctx context.Context, in *StreamRequest, opts ...client.CallOption) (Queries_AccountsOverviewService, error) {
	req := c.c.NewRequest(c.name, "Queries.AccountsOverview", &StreamRequest{})
	stream, err := c.c.Stream(ctx, req, opts...)
	if err != nil {
		return nil, err
	}
	if err := stream.Send(in); err != nil {
		return nil, err
	}
	return &queriesServiceAccountsOverview{stream}, nil
}

type Queries_AccountsOverviewService interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Recv() (*StreamResponse, error)
}

type queriesServiceAccountsOverview struct {
	stream client.Stream
}

func (x *queriesServiceAccountsOverview) Close() error {
	return x.stream.Close()
}

func (x *queriesServiceAccountsOverview) Context() context.Context {
	return x.stream.Context()
}

func (x *queriesServiceAccountsOverview) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *queriesServiceAccountsOverview) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *queriesServiceAccountsOverview) Recv() (*StreamResponse, error) {
	m := new(StreamResponse)
	err := x.stream.Recv(m)
	if err != nil {
		return nil, err
	}
	return m, nil
}

func (c *queriesService) AccountDetail(ctx context.Context, in *StreamRequest, opts ...client.CallOption) (Queries_AccountDetailService, error) {
	req := c.c.NewRequest(c.name, "Queries.AccountDetail", &StreamRequest{})
	stream, err := c.c.Stream(ctx, req, opts...)
	if err != nil {
		return nil, err
	}
	if err := stream.Send(in); err != nil {
		return nil, err
	}
	return &queriesServiceAccountDetail{stream}, nil
}

type Queries_AccountDetailService interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Recv() (*StreamResponse, error)
}

type queriesServiceAccountDetail struct {
	stream client.Stream
}

func (x *queriesServiceAccountDetail) Close() error {
	return x.stream.Close()
}

func (x *queriesServiceAccountDetail) Context() context.Context {
	return x.stream.Context()
}

func (x *queriesServiceAccountDetail) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *queriesServiceAccountDetail) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *queriesServiceAccountDetail) Recv() (*StreamResponse, error) {
	m := new(StreamResponse)
	err := x.stream.Recv(m)
	if err != nil {
		return nil, err
	}
	return m, nil
}

// Server API for Queries service

type QueriesHandler interface {
	AccountsOverview(context.Context, *StreamRequest, Queries_AccountsOverviewStream) error
	AccountDetail(context.Context, *StreamRequest, Queries_AccountDetailStream) error
}

func RegisterQueriesHandler(s server.Server, hdlr QueriesHandler, opts ...server.HandlerOption) error {
	type queries interface {
		AccountsOverview(ctx context.Context, stream server.Stream) error
		AccountDetail(ctx context.Context, stream server.Stream) error
	}
	type Queries struct {
		queries
	}
	h := &queriesHandler{hdlr}
	return s.Handle(s.NewHandler(&Queries{h}, opts...))
}

type queriesHandler struct {
	QueriesHandler
}

func (h *queriesHandler) AccountsOverview(ctx context.Context, stream server.Stream) error {
	m := new(StreamRequest)
	if err := stream.Recv(m); err != nil {
		return err
	}
	return h.QueriesHandler.AccountsOverview(ctx, m, &queriesAccountsOverviewStream{stream})
}

type Queries_AccountsOverviewStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Send(*StreamResponse) error
}

type queriesAccountsOverviewStream struct {
	stream server.Stream
}

func (x *queriesAccountsOverviewStream) Close() error {
	return x.stream.Close()
}

func (x *queriesAccountsOverviewStream) Context() context.Context {
	return x.stream.Context()
}

func (x *queriesAccountsOverviewStream) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *queriesAccountsOverviewStream) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *queriesAccountsOverviewStream) Send(m *StreamResponse) error {
	return x.stream.Send(m)
}

func (h *queriesHandler) AccountDetail(ctx context.Context, stream server.Stream) error {
	m := new(StreamRequest)
	if err := stream.Recv(m); err != nil {
		return err
	}
	return h.QueriesHandler.AccountDetail(ctx, m, &queriesAccountDetailStream{stream})
}

type Queries_AccountDetailStream interface {
	Context() context.Context
	SendMsg(interface{}) error
	RecvMsg(interface{}) error
	Close() error
	Send(*StreamResponse) error
}

type queriesAccountDetailStream struct {
	stream server.Stream
}

func (x *queriesAccountDetailStream) Close() error {
	return x.stream.Close()
}

func (x *queriesAccountDetailStream) Context() context.Context {
	return x.stream.Context()
}

func (x *queriesAccountDetailStream) SendMsg(m interface{}) error {
	return x.stream.Send(m)
}

func (x *queriesAccountDetailStream) RecvMsg(m interface{}) error {
	return x.stream.Recv(m)
}

func (x *queriesAccountDetailStream) Send(m *StreamResponse) error {
	return x.stream.Send(m)
}
