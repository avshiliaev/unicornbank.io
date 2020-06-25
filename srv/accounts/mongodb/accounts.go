package mongodb

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
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
	Uuid    string
	Title   string
	Balance float32
	Status  string
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

func CreateOne(acc AccountsModel, coll *mongo.Collection, ctx context.Context) {

	result, _ := coll.InsertOne(ctx, bson.D{
		{"title", "The Polyglot Developer Podcast"},
		{"author", "Nic Raboy"},
		{"tags", bson.A{"development", "programming", "coding"}},
	})

	fmt.Println(result)
}

func QueryAll(coll *mongo.Collection, ctx context.Context) {

	// read in batches for big data
	cursor, err := coll.Find(ctx, bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var result bson.M
		if err = cursor.Decode(&result); err != nil {
			log.Fatal(err)
		}
		fmt.Println(result)
	}
}

func GetOne(uuid string, coll *mongo.Collection, ctx context.Context) {
	filterCursor, err := coll.Find(ctx, bson.M{"uuid": uuid})
	if err != nil {
		log.Fatal(err)
	}
	var result []bson.M
	if err = filterCursor.All(ctx, &result); err != nil {
		log.Fatal(err)
	}
	fmt.Println(result)
}

func UpdateOne(uuid string, coll *mongo.Collection, ctx context.Context) {
	result, err := coll.UpdateOne(
		ctx,
		bson.M{"uuid": uuid},
		bson.D{
			{"$set", bson.D{{"author", "Nic Raboy"}}},
		},
	)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Updated %v Documents!\n", result.ModifiedCount)
}

func UpdateReplaceOne(uuid string, coll *mongo.Collection, ctx context.Context) {
	result, err := coll.ReplaceOne(
		ctx,
		bson.M{"uuid": uuid},
		bson.M{
			"title":  "The Nic Raboy Show",
			"author": "Nicolas Raboy",
		},
	)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Replaced %v Documents!\n", result.ModifiedCount)
}

func DeleteOne(uuid string, coll *mongo.Collection, ctx context.Context) {
	result, err := coll.DeleteOne(ctx, bson.M{"uuid": uuid})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("DeleteOne removed %v document(s)\n", result.DeletedCount)
}

func DeleteMany(param string, coll *mongo.Collection, ctx context.Context) {
	result, err := coll.DeleteMany(ctx, bson.M{"param": param})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("DeleteMany removed %v document(s)\n", result.DeletedCount)
}

