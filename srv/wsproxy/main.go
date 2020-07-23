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

	// Initialise service
	service.Init()

	// Handle websocket connection
	service.HandleFunc("/profiles", func(w http.ResponseWriter, r *http.Request) {
		req := wsproxy.AccountsStreamRequest{
			Profile: r.URL.Query().Get("profile"),
			Uuid:    r.URL.Query().Get("account"),
		}
		stream, err := handlers.CreateAccountsStream(&req)
		if err != nil {
			log.Print(err)
		}
		defer stream.Close()
		handlers.ProfilesWebSocketHandler(w, r, stream)
	})
	service.HandleFunc("/notifications", func(w http.ResponseWriter, r *http.Request) {
		req := wsproxy.NotificationsStreamRequest{
			Profile: r.URL.Query().Get("profile"),
		}
		stream, err := handlers.CreateNotificationsStream(&req)
		if err != nil {
			log.Print(err)
		}
		defer stream.Close()
		handlers.NotificationsWebSocketHandler(w, r, stream)
	})

	if err := service.Run(); err != nil {
		log.Fatal("Run: ", err)
	}
}
