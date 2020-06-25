package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	"time"
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

func Collection() (*mongo.Collection, context.Context) {

	uri := os.Getenv("MONGO_URI")
	db := os.Getenv("MONGO_DATABASE")
	coll := os.Getenv("MONGO_COLLECTION")

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Print("MongoDB Connected, errors: ", err)
	}
	collection := client.Database(db).Collection(coll)
	return collection, ctx
}

func CreateOne(acc AccountsModel, coll *mongo.Collection, ctx context.Context) *mongo.InsertOneResult {
	result, err := coll.InsertOne(ctx, acc)
	if err != nil {
		panic(err)
	}
	return result
}

func QueryAll(param string, coll *mongo.Collection, ctx context.Context) []AccountsModel {

	var accounts []AccountsModel
	cursor, err := coll.Find(ctx, bson.M{"param": bson.D{{"$eq", param}}})
	if err != nil {
		panic(err)
	}
	if err = cursor.All(ctx, &accounts); err != nil {
		panic(err)
	}
	return accounts
}

func GetOne(uuid string, coll *mongo.Collection, ctx context.Context) AccountsModel {

	filterCursor, err := coll.Find(ctx, bson.M{"uuid": uuid})
	if err != nil {
		log.Fatal(err)
	}
	var result AccountsModel
	if err = filterCursor.All(ctx, &result); err != nil {
		log.Fatal(err)
	}
	return result
}

func UpdateOne(uuid string, acc AccountsModel, coll *mongo.Collection, ctx context.Context) *mongo.UpdateResult {
	result, err := coll.UpdateOne(
		ctx,
		bson.M{"uuid": uuid},
		bson.D{
			{"$set", acc},
		},
	)
	if err != nil {
		log.Fatal(err)
	}
	return result
}

func UpdateReplaceOne(uuid string, acc AccountsModel, coll *mongo.Collection, ctx context.Context) *mongo.UpdateResult {
	result, err := coll.ReplaceOne(
		ctx,
		bson.M{"uuid": uuid},
		acc,
	)
	if err != nil {
		log.Fatal(err)
	}
	return result
}

func DeleteOne(uuid string, coll *mongo.Collection, ctx context.Context) *mongo.DeleteResult {
	result, err := coll.DeleteOne(ctx, bson.M{"uuid": uuid})
	if err != nil {
		log.Fatal(err)
	}
	return result
}

func DeleteMany(param string, coll *mongo.Collection, ctx context.Context) *mongo.DeleteResult {
	result, err := coll.DeleteMany(ctx, bson.M{"param": param})
	if err != nil {
		log.Fatal(err)
	}
	return result
}
