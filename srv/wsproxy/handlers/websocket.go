package handlers

import (
	"github.com/gorilla/websocket"
	"io"
	"log"
	"net/http"
)

func ProfilesWebSocketHandler(w http.ResponseWriter, r *http.Request, stream AccountsStream) {

	// Upgrade request to websocket
	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal("Upgrade: ", err)
		return
	}
	defer ws.Close()

	// Read from the stream server and pass responses on to websocket
	for {
		// Read from stream, end request once the stream is closed
		rsp, err := stream.Recv()
		if err != nil {
			if err != io.EOF {
				return
			}

			break
		}

		// Write server response to the websocket
		err = ws.WriteJSON(rsp)
		if err != nil {
			// End request if socket is closed
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway) {
				log.Println("Unexpected websocket close: ", err)
				break
			} else {
				return
			}
		}
	}

	// Even if we aren't expecting further requests from the websocket, we still need to read from it to ensure we
	// get close signals
	go func() {
		for {
			if _, _, err := ws.NextReader(); err != nil {
				break
			}
		}
	}()

	log.Println("Stream complete")
}

func NotificationsWebSocketHandler(w http.ResponseWriter, r *http.Request, stream NotificationsStream) {

	// Upgrade request to websocket
	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal("Upgrade: ", err)
		return
	}
	defer ws.Close()

	// Read from the stream server and pass responses on to websocket
	for {
		// Read from stream, end request once the stream is closed
		rsp, err := stream.Recv()
		if err != nil {
			if err != io.EOF {
				return
			}

			break
		}

		// Write server response to the websocket
		err = ws.WriteJSON(rsp)
		if err != nil {
			// End request if socket is closed
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway) {
				log.Println("Unexpected websocket close: ", err)
				break
			} else {
				return
			}
		}
	}

	// Even if we aren't expecting further requests from the websocket, we still need to read from it to ensure we
	// get close signals
	go func() {
		for {
			if _, _, err := ws.NextReader(); err != nil {
				break
			}
		}
	}()

	log.Println("Stream complete")
}
