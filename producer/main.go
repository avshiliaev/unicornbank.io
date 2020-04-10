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
	subTopic = "go.micro.topic.jobDone"
	pubTopic = "go.micro.topic.jobInit"
)

func pub(pubTo string) {
	tick := time.NewTicker(time.Second)
	i := 0
	for range tick.C {
		msg := &broker.Message{
			Header: map[string]string{
				"id": fmt.Sprintf("%v", i),
			},
			Body: []byte(fmt.Sprintf("%v: %s", i, time.Now().String())),
		}
		if err := broker.Publish(pubTo, msg); err != nil {
			log.Printf("[pub] failed: %v", err)
		} else {
			fmt.Printf("[pub] message: %v\n", i)
		}
		i++
	}
}

func sub(subTo string) {
	_, err := broker.Subscribe(subTo, func(p broker.Event) error {
		fmt.Println("[<---] received message:", string(p.Message().Body), "header", p.Message().Header)
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

	go pub(pubTopic)
	go sub(subTopic)

	// Block forever
	select {}
	//<-time.After(time.Second * 10)
}
