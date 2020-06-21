package mongodb

import (
	"context"
	"encoding/json"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	"time"
)

// You will be using this Trainer type later in the program
type Profile struct {
	Username string
	Accounts []string
}

type StreamObject struct {
	OperationType string
	FullDocument  Profile
}

func Collection() *mongo.Collection {

	uri := os.Getenv("MONGO_URI")
	db := os.Getenv("MONGO_DATABASE")
	coll := os.Getenv("MONGO_COLLECTION")

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Print("MongoDB Connected, errors: ", err)
	}
	collection := client.Database(db).Collection(coll)
	return collection
}

// TODO: Error handling if user not found
// TODO: Event upon deletion?
// 		- Is never deleted but marked as archived / closed in Status!
func findByUsername(username string, coll *mongo.Collection) Profile {
	// create a value into which the result can be decoded
	var result Profile
	filter := bson.D{{
		"username",
		bson.D{{
			"$in",
			bson.A{username},
		}},
	}}
	if err := coll.FindOne(context.TODO(), filter).Decode(&result); err != nil {
		log.Fatal(err)
	}
	return result
}

// https://developer.mongodb.com/quickstart/golang-change-streams
// https://docs.mongodb.com/manual/reference/method/db.collection.watch/
// https://stackoverflow.com/questions/49151104/watch-for-mongodb-change-streams
func ChangesStream(mt int, message string, ws *websocket.Conn) error {

	coll := Collection()

	// Send initial state of the Profile
	profile := findByUsername(message, coll)
	initialState := StreamObject{
		OperationType: "init",
		FullDocument:  profile,
	}
	bytes, _ := json.Marshal(initialState)
	if err := ws.WriteMessage(mt, bytes); err != nil {
		log.Fatal("Error sending WS: ", err)
	}

	// https://docs.mongodb.com/manual/reference/operator/aggregation/project/
	pipeline := mongo.Pipeline{bson.D{
		{"$match", bson.D{
			{"$or", bson.A{
				bson.D{{"fullDocument.username", message}},
			}},
		}},
	}}
	fullDoc := options.FullDocument("updateLookup")
	opts := options.ChangeStreamOptions{
		FullDocument: &fullDoc,
	}
	stream, errChangeStream := coll.Watch(context.TODO(), pipeline, &opts)
	if errChangeStream != nil {
		panic(errChangeStream)
	}
	defer stream.Close(context.TODO())

	for stream.Next(context.TODO()) {

		var data bson.M
		if err := stream.Decode(&data); err != nil {
			panic(err)
		}
		bytes, _ := json.Marshal(data)

		if err := ws.WriteMessage(mt, bytes); err != nil {
			break
		}
	}

	return nil
}
