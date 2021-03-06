// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/transactions/transactions.proto

package go_micro_service_transactions

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

// Api Endpoints for Transactions service

func NewTransactionsEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Transactions service

type TransactionsService interface {
	Create(ctx context.Context, in *TransactionEvent, opts ...client.CallOption) (*TransactionEvent, error)
}

type transactionsService struct {
	c    client.Client
	name string
}

func NewTransactionsService(name string, c client.Client) TransactionsService {
	return &transactionsService{
		c:    c,
		name: name,
	}
}

func (c *transactionsService) Create(ctx context.Context, in *TransactionEvent, opts ...client.CallOption) (*TransactionEvent, error) {
	req := c.c.NewRequest(c.name, "Transactions.Create", in)
	out := new(TransactionEvent)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Transactions service

type TransactionsHandler interface {
	Create(context.Context, *TransactionEvent, *TransactionEvent) error
}

func RegisterTransactionsHandler(s server.Server, hdlr TransactionsHandler, opts ...server.HandlerOption) error {
	type transactions interface {
		Create(ctx context.Context, in *TransactionEvent, out *TransactionEvent) error
	}
	type Transactions struct {
		transactions
	}
	h := &transactionsHandler{hdlr}
	return s.Handle(s.NewHandler(&Transactions{h}, opts...))
}

type transactionsHandler struct {
	TransactionsHandler
}

func (h *transactionsHandler) Create(ctx context.Context, in *TransactionEvent, out *TransactionEvent) error {
	return h.TransactionsHandler.Create(ctx, in, out)
}
