package main

import (
	"fmt"
	"log"
	"time"

	"github.com/micro/go-micro/v2/broker"
	"github.com/micro/go-micro/v2/config/cmd"
	_ "github.com/micro/go-plugins/broker/rabbitmq/v2"
	_ "github.com/micro/go-plugins/registry/consul/v2"
)

var (
	subTopic = "go.micro.topic.jobInit"
	pubTopic = "go.micro.topic.jobDone"
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
		fmt.Printf("done message: %v\n", header)
	}
}

func sub(subTo string, pubTo string, publish func(pubTo string, header string, body string)) {
	_, err := broker.Subscribe(subTo, func(p broker.Event) error {
		time.Sleep(time.Second * 5)

		subMsgHeader := p.Message().Header["id"]

		publish(pubTo, subMsgHeader, "Done")

		return nil
	})
	if err != nil {
		fmt.Println(err)
	}
}

func main() {
	cmd.Init()

	if err := broker.Init(); err != nil {
		log.Fatalf("Broker Init error: %v", err)
	}
	if err := broker.Connect(); err != nil {
		log.Fatalf("Broker Connect error: %v", err)
	}

	sub(subTopic, pubTopic, pub)

	select {}
}
