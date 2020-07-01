package streamers

import (
	"context"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

func StreamChanges(pipeline []bson.M, ws *websocket.Conn, coll *mongo.Collection) error {

	ctx := context.Background()

	// Send initial state
	initialState := InitState(pipeline, coll, ctx)
	if err := ws.WriteJSON(initialState); err != nil {
		log.Fatal("Error sending WS: ", err)
	}

	// Subscribe to changes stream
	fullDoc := options.FullDocument("updateLookup")
	opts := options.ChangeStreamOptions{
		FullDocument: &fullDoc,
	}

	pre := []bson.M{
		{"$match": bson.M{"operationType": "update"}}, // TODO $or
		{"$replaceRoot": bson.M{"newRoot": bson.M{"$mergeObjects": bson.A{"$fullDocument", "$$ROOT"}}}},
	}
	post := []bson.M{
		{"$replaceRoot": bson.M{"newRoot": bson.M{"payload": "$$ROOT"}}},
		{"$addFields": bson.M{"type": "payload.type"}},
		{"$project": bson.M{"payload.type": 0}},
	}
	log.Print(pre, post)
	stages := [][]bson.M{
		pre,
		pipeline,
		// post,
	}
	var pipelineStream []bson.M
	for _, r := range stages {
		pipelineStream = append(pipelineStream, r...)
	}
	stream, errChangeStream := coll.Watch(context.TODO(), pipelineStream, &opts)
	if errChangeStream != nil {
		panic(errChangeStream)
	}
	defer stream.Close(context.TODO())

	for stream.Next(context.TODO()) {

		var data bson.M
		if err := stream.Decode(&data); err != nil {
			log.Print(err)
		}
		state := UpdateAction{
			Type:    "update",
			Payload: data,
		}
		if err := ws.WriteJSON(state); err != nil {
			break
		}
	}

	return nil
}
