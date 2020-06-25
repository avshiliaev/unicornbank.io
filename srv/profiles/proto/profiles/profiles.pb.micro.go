// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/profiles/profiles.proto

package go_micro_service_profiles

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

// Api Endpoints for Profiles service

func NewProfilesEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Profiles service

type ProfilesService interface {
	GetUserState(ctx context.Context, in *UserStateRequest, opts ...client.CallOption) (*UserStateResponse, error)
	GetAccountDetail(ctx context.Context, in *AccountDetailRequest, opts ...client.CallOption) (*AccountResponseType, error)
}

type profilesService struct {
	c    client.Client
	name string
}

func NewProfilesService(name string, c client.Client) ProfilesService {
	return &profilesService{
		c:    c,
		name: name,
	}
}

func (c *profilesService) GetUserState(ctx context.Context, in *UserStateRequest, opts ...client.CallOption) (*UserStateResponse, error) {
	req := c.c.NewRequest(c.name, "Profiles.GetUserState", in)
	out := new(UserStateResponse)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *profilesService) GetAccountDetail(ctx context.Context, in *AccountDetailRequest, opts ...client.CallOption) (*AccountResponseType, error) {
	req := c.c.NewRequest(c.name, "Profiles.GetAccountDetail", in)
	out := new(AccountResponseType)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Profiles service

type ProfilesHandler interface {
	GetUserState(context.Context, *UserStateRequest, *UserStateResponse) error
	GetAccountDetail(context.Context, *AccountDetailRequest, *AccountResponseType) error
}

func RegisterProfilesHandler(s server.Server, hdlr ProfilesHandler, opts ...server.HandlerOption) error {
	type profiles interface {
		GetUserState(ctx context.Context, in *UserStateRequest, out *UserStateResponse) error
		GetAccountDetail(ctx context.Context, in *AccountDetailRequest, out *AccountResponseType) error
	}
	type Profiles struct {
		profiles
	}
	h := &profilesHandler{hdlr}
	return s.Handle(s.NewHandler(&Profiles{h}, opts...))
}

type profilesHandler struct {
	ProfilesHandler
}

func (h *profilesHandler) GetUserState(ctx context.Context, in *UserStateRequest, out *UserStateResponse) error {
	return h.ProfilesHandler.GetUserState(ctx, in, out)
}

func (h *profilesHandler) GetAccountDetail(ctx context.Context, in *AccountDetailRequest, out *AccountResponseType) error {
	return h.ProfilesHandler.GetAccountDetail(ctx, in, out)
}
