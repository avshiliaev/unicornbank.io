package main

import (
	"context"
	"fmt"
	"lagerist.io/srv/gateway/proto/entities"
	"lagerist.io/srv/gateway/proto/projects"
	"log"
	"net/http"

	"github.com/micro/go-micro/v2/web"

	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

func main() {
	service := web.NewService(
		web.Name("lagerist-io-srv-gateway"),
		web.Address(":5003"),
	)

	service.HandleFunc("/projects", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			r.ParseForm()

			title := r.Form.Get("title")
			if len(title) == 0 {
				title = "untitled project"
			}

			cli := service.Options().Service.Client()

			cl := projects.NewProjectsService("lagerist-io-srv-projects", cli)
			rsp, err := cl.CreateProject(context.Background(), &projects.ProjectsRequest{
				Title: title,
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
			r.ParseForm()

			title := r.Form.Get("title")
			if len(title) == 0 {
				title = "untitled entity"
			}

			cli := service.Options().Service.Client()

			cl := entities.NewEntitiesService("lagerist-io-srv-entities", cli)
			rsp, err := cl.CreateEntity(context.Background(), &entities.EntitiesRequest{
				Title: title,
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

	if err := service.Init(); err != nil {
		log.Fatal(err)
	}

	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
