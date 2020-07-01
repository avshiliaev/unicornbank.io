package handlers

import (
	"context"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"unicornbank.io/srv/streams/mongodb"
)

type AccountType struct {
	Uuid         string   `bson:"uuid,omitempty" json:"uuid"`
	Profile      string   `bson:"profile,omitempty" json:"profile"`
	Balance      float32  `bson:"balance,omitempty" json:"balance"`
	Status       string   `bson:"status,omitempty" json:"status"`
	Transactions []string `bson:"transactions,omitempty" json:"transactions"`
}
type AccountsInitAction struct {
	Type    string        `json:"type"`
	Payload []AccountType `json:"payload"`
}
type AccountsUpdateAction struct {
	Type    string      `json:"type"`
	Payload AccountType `json:"payload"`
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func AccountsHandler(w http.ResponseWriter, r *http.Request) {

	// TODO: sanitize!
	profile := r.URL.Query().Get("profile")

	// Upgrade connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer ws.Close()

	// Prepare mongo connection
	coll := mongodb.ProfilesCollection()
	pipeline := mongodb.AccountsPipeline(profile)
	ctx := context.Background()

	// Send the initial state
	var state []AccountType
	cursor := mongodb.Aggregate(pipeline, coll, ctx)
	if err = cursor.All(ctx, &state); err != nil {
		log.Fatal(err)
	}
	action := AccountsInitAction{
		Type:    "init",
		Payload: state,
	}
	ws.WriteJSON(action)

	stream, streamError := mongodb.StreamChanges(pipeline, coll)
	if streamError != nil {
		log.Fatal(streamError)
	}
	defer stream.Close(context.TODO())

	for stream.Next(context.TODO()) {

		var data AccountType
		if err := stream.Decode(&data); err != nil {
			log.Print(err)
			break
		}
		state := AccountsUpdateAction{
			Type:    "update",
			Payload: data,
		}
		if err := ws.WriteJSON(state); err != nil {
			break
		}
	}

}

func TransactionsHandler(w http.ResponseWriter, r *http.Request) {

}
