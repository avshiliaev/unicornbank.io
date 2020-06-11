// Code generated by protoc-gen-micro. DO NOT EDIT.
// source: proto/projects.proto

package lagerist_io_srv_gateway

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

// Api Endpoints for Projects service

func NewProjectsEndpoints() []*api.Endpoint {
	return []*api.Endpoint{}
}

// Client API for Projects service

type ProjectsService interface {
	CreateProject(ctx context.Context, in *Request, opts ...client.CallOption) (*Response, error)
}

type projectsService struct {
	c    client.Client
	name string
}

func NewProjectsService(name string, c client.Client) ProjectsService {
	return &projectsService{
		c:    c,
		name: name,
	}
}

func (c *projectsService) CreateProject(ctx context.Context, in *Request, opts ...client.CallOption) (*Response, error) {
	req := c.c.NewRequest(c.name, "Projects.CreateProject", in)
	out := new(Response)
	err := c.c.Call(ctx, req, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Projects service

type ProjectsHandler interface {
	CreateProject(context.Context, *Request, *Response) error
}

func RegisterProjectsHandler(s server.Server, hdlr ProjectsHandler, opts ...server.HandlerOption) error {
	type projects interface {
		CreateProject(ctx context.Context, in *Request, out *Response) error
	}
	type Projects struct {
		projects
	}
	h := &projectsHandler{hdlr}
	return s.Handle(s.NewHandler(&Projects{h}, opts...))
}

type projectsHandler struct {
	ProjectsHandler
}

func (h *projectsHandler) CreateProject(ctx context.Context, in *Request, out *Response) error {
	return h.ProjectsHandler.CreateProject(ctx, in, out)
}
