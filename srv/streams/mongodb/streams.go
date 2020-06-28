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
type TransactionsModel struct {
	Account string  `json:"account"`
	Uuid    string  `json:"uuid"`
	Status  string  `json:"status"`
	Amount  float32 `json:"amount"`
}
type AccountsModel struct {
	Uuid         string              `json:"uuid"`
	Profile      string              `json:"profile"`
	Balance      float32             `json:"balance"`
	Status       string              `json:"status"`
	Transactions []TransactionsModel `json:"transactions"`
}
type StreamObject struct {
	OperationType string          `json:"operationType"`
	FullDocument  []AccountsModel `json:"fullDocument"`
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
func findByProfiles(profile string, coll *mongo.Collection, ctx context.Context) []AccountsModel {

	var result []AccountsModel
	filter, err := coll.Find(ctx, bson.M{"profile": profile})
	if err != nil {
		log.Fatal(err)
	}
	if err = filter.All(ctx, &result); err != nil {
		log.Fatal(err)
	}
	return result
}

// https://developer.mongodb.com/quickstart/golang-change-streams
// https://docs.mongodb.com/manual/reference/method/db.collection.watch/
// https://stackoverflow.com/questions/49151104/watch-for-mongodb-change-streams
func ChangesStream(mt int, message string, ws *websocket.Conn) error {

	coll := Collection()
	ctx := context.Background()

	// Send initial state of the Profile
	profile := findByProfiles(message, coll, ctx)
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
				bson.D{{"fullDocument.profile", message}},
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
			log.Print(err)
		}
		bytes, _ := json.Marshal(data)
		if err := ws.WriteMessage(mt, bytes); err != nil {
			break
		}
	}

	return nil
}
