package handler

import (
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"unicornbank.io/srv/streams/mongodb"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func WebSocketHandler(w http.ResponseWriter, r *http.Request) {
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

		if err := mongodb.ChangesStream(mt, string(message[:]), c); err != nil {
			log.Fatal("Error MongoDB!:", err)
		}
	}
}
