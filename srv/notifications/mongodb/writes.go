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

func NotificationsCollection() *mongo.Collection {

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
