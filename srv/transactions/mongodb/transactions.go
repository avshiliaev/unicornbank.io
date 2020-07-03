package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
)

type TransactionsModel struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	Account   string             `bson:"account,omitempty"`
	Amount    float32            `bson:"amount,omitempty"`
	Info      string             `bson:"info,omitempty"`
	Status    string             `bson:"status,omitempty"`
	Timestamp int64              `bson:"timestamp,omitempty"`
	Uuid      string             `bson:"uuid,omitempty"`
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

func CreateOne(tr *transactions.TransactionType, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	transaction := TransactionsModel{
		Account:   tr.Account,
		Amount:    tr.Amount,
		Info:      tr.Info,
		Status:    tr.Status,
		Timestamp: tr.Timestamp,
		Uuid:      tr.Uuid,
	}
	result, err := coll.InsertOne(ctx, &transaction)
	if err != nil {
		log.Print(err)
	}
	return result
}

func GetOne(uuid string, ctx context.Context, coll *mongo.Collection) *transactions.TransactionType {

	filter := TransactionsModel{Uuid: uuid}
	var result TransactionsModel
	if err := coll.FindOne(ctx, filter).Decode(&result); err != nil {
		log.Fatal(err)
	}
	tr := transactions.TransactionType{
		Account:   result.Account,
		Amount:    result.Amount,
		Info:      result.Info,
		Status:    result.Status,
		Timestamp: result.Timestamp,
		Uuid:      result.Uuid,
	}
	return &tr
}

func UpdateReplaceOne(tr *transactions.TransactionType, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	filter := TransactionsModel{Uuid: tr.Uuid}
	transaction := TransactionsModel{
		Account:   tr.Account,
		Amount:    tr.Amount,
		Info:      tr.Info,
		Status:    tr.Status,
		Timestamp: tr.Timestamp,
		Uuid:      tr.Uuid,
	}
	result, err := coll.UpdateOne(
		ctx,
		filter,
		bson.D{
			{"$set", transaction},
		},
	)
	if err != nil {
		log.Print(err)
	}
	return result
}