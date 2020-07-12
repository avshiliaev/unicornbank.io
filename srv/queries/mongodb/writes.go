package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	"time"
	queries "unicornbank.io/srv/queries/proto/queries"
)

var TimeStringFormat = "02-01-2006 15:04"

func QueriesCollection() *mongo.Collection {

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

func CreateAccount(acc *queries.AccountEvent, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

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

func UpdateAccount(acc *queries.AccountEvent, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

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

func CreateTransaction(tr *queries.TransactionEvent, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

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

func UpdateTransaction(tr *queries.TransactionEvent, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

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
