package handlers

import (
	"context"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/bson"
	"log"
	"net/http"
	"unicornbank.io/srv/streams/mongodb"
)

type DetailAction struct {
	Type    string `json:"type"`
	Payload bson.M `json:"payload"`
}

func DetailHandler(w http.ResponseWriter, r *http.Request) {

	// TODO: sanitize!
	account := r.URL.Query().Get("account")

	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}

	// Upgrade connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer ws.Close()

	// Prepare mongo connection
	coll := mongodb.ProfilesCollection()
	pipeline := mongodb.DetailPipeline(account)
	ctx := context.Background()

	// Send the initial state
	var state []bson.M
	cursor := mongodb.Aggregate(pipeline, coll, ctx)
	if err = cursor.All(ctx, &state); err != nil {
		log.Fatal(err)
	}
	action := DetailAction{
		Type:    "init",
		Payload: state[0],
	}
	ws.WriteJSON(action)

	// Initialize stream cursor
	stream, streamError := mongodb.StreamChanges(pipeline, coll)
	if streamError != nil {
		log.Fatal(streamError)
	}
	defer stream.Close(context.TODO())

	// Iterate over the stream updates
	for stream.Next(context.TODO()) {

		var data bson.M
		if err := stream.Decode(&data); err != nil {
			log.Print(err)
			break
		}
		state := DetailAction{
			Type:    "update",
			Payload: data,
		}
		if err := ws.WriteJSON(state); err != nil {
			break
		}
	}
}
