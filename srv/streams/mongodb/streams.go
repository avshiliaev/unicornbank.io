package mongodb

import (
	"context"
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
	Uuid              string              `json:"uuid"`
	Profile           string              `json:"profile"`
	Balance           float32             `json:"balance"`
	Status            string              `json:"status"`
	Transactions      []TransactionsModel `json:"transactions"`
	TransactionsCount int32               `json:"transactionsCount"`
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

func InitState(profile string, coll *mongo.Collection, ctx context.Context) StreamObject {

	var accounts []AccountsModel
	match := bson.D{{"$match", bson.D{{"profile", profile}}}}
	group := bson.D{{
		"$project",
		bson.D{
			{"uuid", 1},
			{"profile", 1},
			{"balance", 1},
			{"status", 1},
			{"transactions", 1},
			{"transactionsCount", bson.D{
				{"$size", "$transactions"},
			}},
		},
	}}
	pipeline := mongo.Pipeline{match, group}
	filterCursor, err := coll.Aggregate(ctx, pipeline)
	if err != nil {
		log.Fatal(err)
	}
	if err = filterCursor.All(ctx, &accounts); err != nil {
		log.Fatal(err)
	}
	state := StreamObject{
		OperationType: "init",
		FullDocument:  accounts,
	}
	return state
}

func ChangesStream(profile string, detail bool, ws *websocket.Conn) error {

	coll := Collection()
	ctx := context.Background()

	// Send initial state of the profile's accounts
	initialState := InitState(profile, coll, ctx)
	if err := ws.WriteJSON(initialState); err != nil {
		log.Fatal("Error sending WS: ", err)
	}

	// Subscribe to changes stream
	match := bson.D{
		{"$match", bson.D{
			{"$or", bson.A{
				bson.D{{"fullDocument.profile", profile}},
			}},
		}},
	}
	group := bson.D{{
		"$project",
		bson.D{
			{"operationType", 1},
			{"fullDocument.uuid", 1},
			{"fullDocument.profile", 1},
			{"fullDocument.balance", 1},
			{"fullDocument.status", 1},
			{"fullDocument.transactions", 1},
			{"fullDocument.transactionsCount", bson.D{
				{"$size", "$fullDocument.transactions"},
			}},
		},
	}}
	fullDoc := options.FullDocument("updateLookup")
	opts := options.ChangeStreamOptions{
		FullDocument: &fullDoc,
	}
	stream, errChangeStream := coll.Watch(context.TODO(), mongo.Pipeline{match, group}, &opts)
	if errChangeStream != nil {
		panic(errChangeStream)
	}
	defer stream.Close(context.TODO())

	for stream.Next(context.TODO()) {

		var data bson.M
		if err := stream.Decode(&data); err != nil {
			log.Print(err)
		}
		if err := ws.WriteJSON(data); err != nil {
			break
		}
	}

	return nil
}
