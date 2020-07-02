package handlers

import (
	"context"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"unicornbank.io/srv/streams/mongodb"
)

type OverviewInitAction struct {
	Type    string        `json:"type"`
	Payload []AccountType `json:"payload"`
}
type OverviewUpdateAction struct {
	Type    string      `json:"type"`
	Payload AccountType `json:"payload"`
}

func OverviewHandler(w http.ResponseWriter, r *http.Request) {

	// TODO: sanitize!
	profile := r.URL.Query().Get("profile")

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
	pipeline := mongodb.OverviewPipeline(profile)
	ctx := context.Background()

	// Send the initial state
	var state []AccountType
	cursor := mongodb.Aggregate(pipeline, coll, ctx)
	if err = cursor.All(ctx, &state); err != nil {
		log.Fatal(err)
	}
	action := OverviewInitAction{
		Type:    "init",
		Payload: state,
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

		var data AccountType
		if err := stream.Decode(&data); err != nil {
			log.Print(err)
			break
		}
		state := OverviewUpdateAction{
			Type:    "update",
			Payload: data,
		}
		if err := ws.WriteJSON(state); err != nil {
			break
		}
	}
}
