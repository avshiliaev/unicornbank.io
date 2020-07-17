package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	accounts "unicornbank.io/srv/approvals/proto/approvals"
)

type AccountsModel struct {
	ID     primitive.ObjectID `bson:"_id,omitempty"`
	Uuid   string             `bson:"uuid,omitempty"`
	Status string             `bson:"status,omitempty"`
}

func MongoCollection(dbName string, collName string) (*mongo.Collection, error) {
	uri := os.Getenv("MONGO_URI")
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(uri))
	var collection *mongo.Collection
	if client != nil {
		collection = client.Database(dbName).Collection(collName)
	}
	return collection, err
}

func CreateOne(acc *accounts.AccountEvent, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	account := AccountsModel{
		Status: acc.Status,
		Uuid:   acc.Uuid,
	}
	result, err := coll.InsertOne(ctx, &account)
	if err != nil {
		log.Print(err)
	}
	return result
}
