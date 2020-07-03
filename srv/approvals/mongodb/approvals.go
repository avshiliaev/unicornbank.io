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
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Uuid    string             `bson:"uuid,omitempty"`
	Status  string             `bson:"status,omitempty"`
}

func AccountsCollection() *mongo.Collection {

	uri := os.Getenv("MONGO_URI")
	db := os.Getenv("MONGO_DATABASE")
	coll := os.Getenv("MONGO_COLLECTION")

	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(uri))
	if err != nil {
		log.Print("MongoDB Connected, errors: ", err)
	}
	collection := client.Database(db).Collection(coll)
	return collection
}

func CreateOne(acc *accounts.AccountType, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	account := AccountsModel{
		Status:  acc.Status,
		Uuid:    acc.Uuid,
	}
	result, err := coll.InsertOne(ctx, &account)
	if err != nil {
		log.Print(err)
	}
	return result
}
