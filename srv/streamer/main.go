package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/micro/go-micro/v2/web"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

type User struct {
	Name string
}

func main() {
	// New web service
	service := web.NewService(
		web.Name("go.micro.web.stream"),
	)

	if err := service.Init(); err != nil {
		log.Fatal("Init", err)
	}

	service.HandleFunc("/push", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(r.Body)
	})

	// Handle websocket connection
	service.HandleFunc("/stream", func(w http.ResponseWriter, r *http.Request) {
		c, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			log.Print("upgrade:", err)
			return
		}
		defer c.Close()
		for {
			mt, message, err := c.ReadMessage()
			if err != nil {
				log.Println("read:", err)
				break
			}
			log.Printf("recv: %s", message)
			user := &User{Name: "Frank"}
			bytes, err := json.Marshal(user)
			err = c.WriteMessage(mt, bytes)
			if err != nil {
				log.Println("write:", err)
				break
			}
		}
	})

	if err := service.Run(); err != nil {
		log.Fatal("Run: ", err)
	}
}
