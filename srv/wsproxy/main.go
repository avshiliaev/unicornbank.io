package main

// https://github.com/micro-in-cn/tutorials/tree/master/examples

import (
	"github.com/micro/go-micro/v2/web"
	"log"
	"net/http"
	"srv/wsproxy/handlers"
	wsproxy "srv/wsproxy/proto/wsproxy"
)

func main() {
	// New web service
	service := web.NewService(
		web.Name("go.micro.web.streams"),
	)

	if err := service.Init(); err != nil {
		log.Fatal("Init", err)
	}

	// Handle websocket connection
	service.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
		req := wsproxy.StreamRequest{
			Profile: r.URL.Query().Get("profile"),
			Uuid: r.URL.Query().Get("account"),
		}
		stream, err := handlers.CreateGRPCStream(&req)
		if err != nil {
			log.Print(err)
		}
		defer stream.Close()
		handlers.WebSocketHandler(w, r, stream)
	})

	if err := service.Run(); err != nil {
		log.Fatal("Run: ", err)
	}
}
