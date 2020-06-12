package main

import (
	"context"
	"encoding/json"
	"fmt"
	"lagerist.io/srv/gateway/proto/entities"
	"lagerist.io/srv/gateway/proto/projects"
	"log"
	"net/http"

	"github.com/micro/go-micro/v2/web"

	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

type newProjectReq struct {
	Title string `json:"title"`
}

type newEntityReq struct {
	Title string `json:"title"`
}

func main() {
	service := web.NewService(
		web.Name("lagerist-io-srv-gateway"),
		web.Address(":5003"),
	)

	service.HandleFunc("/projects", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {

			var p newProjectReq
			// Try to decode the request body into the struct. If there is an error,
			// respond to the client with the error message and a 400 status code.
			err := json.NewDecoder(r.Body).Decode(&p)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			cli := service.Options().Service.Client()

			cl := projects.NewProjectsService("lagerist-io-srv-projects", cli)
			rsp, err := cl.CreateProject(context.Background(), &projects.ProjectsRequest{
				Title: p.Title,
			})

			if err != nil {
				http.Error(w, err.Error(), 500)
				return
			}

			fmt.Print(rsp.Msg)

			w.Write([]byte("msg: " + rsp.Msg))
			return
		}

		fmt.Fprint(w)
	})

	service.HandleFunc("/entities", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			var entity newEntityReq
			// Try to decode the request body into the struct. If there is an error,
			// respond to the client with the error message and a 400 status code.
			err := json.NewDecoder(r.Body).Decode(&entity)
			if err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}

			cli := service.Options().Service.Client()

			cl := entities.NewEntitiesService("lagerist-io-srv-entities", cli)
			rsp, err := cl.CreateEntity(context.Background(), &entities.EntitiesRequest{
				Title: entity.Title,
			})

			if err != nil {
				http.Error(w, err.Error(), 500)
				return
			}

			w.Write([]byte("msg: " + rsp.Msg))
			return
		}

		fmt.Fprint(w)
	})

	if err := service.Init(); err != nil {
		log.Fatal(err)
	}

	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
