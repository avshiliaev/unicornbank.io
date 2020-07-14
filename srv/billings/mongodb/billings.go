package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	billings "unicornbank.io/srv/billings/proto/billings"
)

type TransactionsModel struct {
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Account string             `bson:"account,omitempty"`
	Status  string             `bson:"status,omitempty"`
	Uuid    string             `bson:"uuid,omitempty"`
}

func TransactionsCollection() *mongo.Collection {

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

func CreateOne(tr *billings.TransactionEvent, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	account := TransactionsModel{
		Account: tr.Account,
		Status:  tr.Status,
		Uuid:    tr.Uuid,
	}
	result, err := coll.InsertOne(ctx, &account)
	if err != nil {
		log.Print(err)
	}
	return result
}
