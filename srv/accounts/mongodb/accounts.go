package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

// Mega Tutorials
// https://www.mongodb.com/blog/search/golang%20quickstart
// CRUD
// https://www.mongodb.com/blog/post/quick-start-golang--mongodb--how-to-create-documents
// https://www.mongodb.com/blog/post/quick-start-golang--mongodb--how-to-read-documents
// https://www.mongodb.com/blog/post/quick-start-golang--mongodb--how-to-update-documents
// https://www.mongodb.com/blog/post/quick-start-golang--mongodb--how-to-delete-documents
// Structs
// https://www.mongodb.com/blog/post/quick-start-golang--mongodb--modeling-documents-with-go-data-structures

type AccountsModel struct {
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Uuid    string             `bson:"uuid,omitempty"`
	Title   string             `bson:"title,omitempty"`
	Balance float32            `bson:"balance,omitempty"`
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
		Uuid:    acc.Uuid,
		Title:   acc.Title,
		Status:  acc.Status,
		Balance: acc.Balance,
	}
	result, err := coll.InsertOne(ctx, &account)
	if err != nil {
		log.Print(err)
	}
	return result
}

func GetOne(uuid string, ctx context.Context, coll *mongo.Collection) *accounts.AccountType {

	filter := AccountsModel{Uuid: uuid}
	var result AccountsModel
	if err := coll.FindOne(ctx, filter).Decode(&result); err != nil {
		log.Fatal(err)
	}
	acc := accounts.AccountType{
		Uuid: result.Uuid,
		Title: result.Title,
		Status: result.Status,
		Balance: result.Balance,
	}
	return &acc
}

func UpdateReplaceOne(acc *accounts.AccountType, ctx context.Context, coll *mongo.Collection) *mongo.UpdateResult {

	filter := AccountsModel{Uuid: acc.Uuid}
	account := AccountsModel{
		Uuid:    acc.Uuid,
		Title:   acc.Title,
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
