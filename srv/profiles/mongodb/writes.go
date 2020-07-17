package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	"time"
	profiles "unicornbank.io/srv/profiles/proto/profiles"
)

var TimeStringFormat = "02-01-2006 15:04"

func MongoCollection(dbName string, collName string) (*mongo.Collection, error) {
	uri := os.Getenv("MONGO_URI")
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(uri))
	var collection *mongo.Collection
	if client != nil {
		collection = client.Database(dbName).Collection(collName)
	}
	return collection, err
}

func CreateAccount(acc *profiles.AccountEvent, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	account := AccountsModel{
		Balance: acc.Balance,
		Profile: acc.Profile,
		Status:  acc.Status,
		Uuid:    acc.Uuid,
	}
	result, err := coll.InsertOne(ctx, &account)
	if err != nil {
		log.Print(err)
	}
	return result
}

func UpdateAccount(acc *profiles.AccountEvent, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	filter := AccountsModel{Uuid: acc.Uuid}
	account := AccountsModel{
		Balance: acc.Balance,
		Profile: acc.Profile,
		Status:  acc.Status,
		Uuid:    acc.Uuid,
	}
	result, err := coll.UpdateOne(
		ctx,
		filter,
		bson.D{
			{"$set", account},
		},
	)
	if err != nil {
		log.Print(err)
	}
	return result
}

func CreateTransaction(tr *profiles.TransactionEvent, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	filter := AccountsModel{Uuid: tr.Account}
	transaction := TransactionsModel{
		Account: tr.Account,
		Amount:  tr.Amount,
		Info:    tr.Info,
		Status:  tr.Status,
		Time:    time.Unix(tr.Timestamp, 0).Format(TimeStringFormat),
		Uuid:    tr.Uuid,
	}
	change := bson.M{"$push": bson.M{"transactions": transaction}}
	result, err := coll.UpdateOne(
		ctx,
		filter,
		change,
	)
	if err != nil {
		log.Print(err)
	}
	return result
}

func UpdateTransaction(tr *profiles.TransactionEvent, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	transaction := TransactionsModel{
		Account: tr.Account,
		Amount:  tr.Amount,
		Info:    tr.Info,
		Status:  tr.Status,
		Time:    time.Unix(tr.Timestamp, 0).Format(TimeStringFormat),
		Uuid:    tr.Uuid,
	}
	filter := bson.M{
		"uuid":              tr.Account,
		"transactions.uuid": tr.Uuid,
	}
	update := bson.M{
		"$set": bson.M{
			"transactions.$": transaction,
		},
	}
	result, err := coll.UpdateOne(
		ctx,
		filter,
		update,
	)
	if err != nil {
		log.Print(err)
	}
	return result
}
