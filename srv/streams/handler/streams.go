package handler

import (
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"unicornbank.io/srv/streams/mongodb"
)

type Msg struct {
	Profile string `json:"profile"`
	Detail  bool   `json:"detail"`
}

func WebSocketHandler(w http.ResponseWriter, r *http.Request) {

	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}
	client, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer client.Close()
	for {
		m := Msg{}
		err := client.ReadJSON(&m)
		if err != nil {
			log.Println("read:", err)
			break
		}
		if err := mongodb.ChangesStream(m.Profile, m.Detail, client); err != nil {
			log.Fatal("Error MongoDB!:", err)
		}
	}
}
