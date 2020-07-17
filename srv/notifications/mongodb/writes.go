package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	"time"
	notifications "unicornbank.io/srv/notifications/proto/notifications"
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

func UpdatedAccount(acc *notifications.AccountEvent, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	notification := NotificationsModel{
		Description: "The status of your account was updated",
		Profile:     acc.Profile,
		Status:      acc.Status,
		Time:        time.Now().Format(TimeStringFormat),
		Title:       "Account",
		Uuid:        acc.Uuid,
	}
	result, err := coll.InsertOne(ctx, &notification)
	if err != nil {
		log.Print(err)
	}
	return result
}

func UpdatedTransaction(tr *notifications.TransactionEvent, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	var note NotificationsModel
	if err := coll.FindOne(
		ctx,
		NotificationsModel{Uuid: tr.Account},
	).Decode(&note); err != nil {
		log.Print(err)
	}
	notification := NotificationsModel{
		Description: "Your transaction was processed",
		Profile:     note.Profile,
		Status:      tr.Status,
		Time:        time.Now().Format(TimeStringFormat),
		Title:       "Transaction",
		Uuid:        tr.Uuid,
	}
	result, err := coll.InsertOne(ctx, &notification)
	if err != nil {
		log.Print(err)
	}
	return result
}
