package main

// https://github.com/micro-in-cn/tutorials/tree/master/examples

import (
	"github.com/micro/go-micro/v2/web"
	"log"
	"net/http"
	"srv/wsproxy/handlers"
	wsproxy "srv/wsproxy/proto/wsproxy"
	"strconv"
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

		// Parse query params
		query := r.URL.Query()
		profile := query.Get("profile")
		account := query.Get("account")

		// Create a stream object
		req := wsproxy.AccountsStreamRequest{
			Profile: profile,
			Uuid:    account,
		}
		stream, err := handlers.CreateAccountsStream(&req)
		if err != nil {
			log.Print(err)
		}
		defer stream.Close()

		// Handle web socket connection
		handlers.ProfilesWebSocketHandler(w, r, stream)
	})
	service.HandleFunc("/notifications", func(w http.ResponseWriter, r *http.Request) {

		// Parse query params
		query := r.URL.Query()
		count, err := strconv.Atoi(query.Get("count"))
		if err != nil {
			log.Print(err)
		}
		profile := query.Get("profile")

		// Create a stream object
		req := wsproxy.NotificationsStreamRequest{
			Profile: profile,
			Count: int32(count),
		}
		stream, err := handlers.CreateNotificationsStream(&req)
		if err != nil {
			log.Print(err)
		}
		defer stream.Close()

		// Handle web socket connection
		handlers.NotificationsWebSocketHandler(w, r, stream)
	})

	if err := service.Run(); err != nil {
		log.Fatal("Run: ", err)
	}
}
