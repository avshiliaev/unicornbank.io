package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/micro/go-micro/v2/web"

	"github.com/micro/go-micro/v2/broker"
	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

var (
	pubTopicProject = "go.micro.topic.createProject"
)


func pub(pubTo string, header string, body string) {
	msg := &broker.Message{
		Header: map[string]string{
			"id": fmt.Sprintf("%v", header),
		},
		Body: []byte(fmt.Sprintf("%v: %s", body, time.Now().String())),
	}
	if err := broker.Publish(pubTo, msg); err != nil {
		log.Printf("[pub] failed: %v", err)
	} else {
		fmt.Printf("[pub] dispatched: %v\n", header)
	}
}

func main() {
	service := web.NewService(
		web.Name("lagerist.io/srv/web"),
	)

	service.HandleFunc("/projects", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			r.ParseForm()

			name := r.Form.Get("title")
			if len(name) == 0 {
				name = "ZERO_title"
			}

			pub(pubTopicProject, name, name)

			w.Write([]byte("Ok"))
			return
		}

		fmt.Fprint(w, "Error")
	})

	// Init a broker client
	if err := broker.Init(); err != nil {
		log.Fatalf("Broker Init error: %v", err)
	}
	if err := broker.Connect(); err != nil {
		log.Fatalf("Broker Connect error: %v", err)
	}

	// Init a web service
	if err := service.Init(); err != nil {
		log.Fatal(err)
	}
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
