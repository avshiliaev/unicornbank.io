package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	profiles "unicornbank.io/srv/profiles/proto/profiles"
)

type TransactionsModel struct {
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Account string             `bson:"account,omitempty"`
	Uuid    string             `bson:"uuid,omitempty"`
	Status  string             `bson:"status,omitempty"`
	Amount  float32            `bson:"amount,omitempty"`
}
type AccountsModel struct {
	ID           primitive.ObjectID  `bson:"_id,omitempty"`
	Uuid         string              `bson:"uuid,omitempty"`
	Profile      string              `bson:"title,omitempty"`
	Balance      float32             `bson:"balance,omitempty"`
	Status       string              `bson:"status,omitempty"`
	Transactions []TransactionsModel `bson:"transactions,omitempty"`
}

func ProfilesCollection() *mongo.Collection {

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

func CreateAccount(acc *profiles.AccountType, ctx context.Context, coll *mongo.Collection) *mongo.InsertOneResult {

	account := AccountsModel{
		Uuid:    acc.Uuid,
		Profile: acc.Profile,
		Status:  acc.Status,
		Balance: acc.Balance,
	}
	result, err := coll.InsertOne(ctx, &account)
	if err != nil {
		log.Print(err)
	}
	return result
}

func UpdateAccount(acc *profiles.AccountType, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	filter := AccountsModel{Uuid: acc.Uuid}
	account := AccountsModel{
		Uuid:    acc.Uuid,
		Profile: acc.Profile,
		Status:  acc.Status,
		Balance: acc.Balance,
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

func CreateTransaction(tr *profiles.TransactionType, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	filter := AccountsModel{Uuid: tr.Account}
	transaction := TransactionsModel{
		Account: tr.Account,
		Uuid:    tr.Uuid,
		Status:  tr.Status,
		Amount:  tr.Amount,
	}
	change := bson.M{"$push":bson.M{"transactions": transaction}}
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

func UpdateTransaction(tr *profiles.TransactionType, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	transaction := TransactionsModel{
		Account: tr.Account,
		Uuid:    tr.Uuid,
		Status:  tr.Status,
		Amount:  tr.Amount,
	}
	filter := bson.M{
		"uuid": tr.Account,
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
