package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
	"time"
)

func ProfilesCollection() *mongo.Collection {

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
	return collection
}

func Aggregate(pipeline []bson.M, coll *mongo.Collection, ctx context.Context) *mongo.Cursor {

	cursor, err := coll.Aggregate(ctx, pipeline)
	if err != nil {
		log.Fatal(err)
	}
	return cursor
}

func StreamChanges(pipeline []bson.M, coll *mongo.Collection) (*mongo.ChangeStream, error) {

	// Subscribe to changes stream
	fullDoc := options.FullDocument("updateLookup")
	opts := options.ChangeStreamOptions{
		FullDocument: &fullDoc,
	}
	pre := []bson.M{
		{"$match": bson.M{"operationType": "update"}}, // TODO $or
		{"$replaceRoot": bson.M{"newRoot": bson.M{"$mergeObjects": bson.A{"$fullDocument", "$$ROOT"}}}},
	}
	stages := [][]bson.M{
		pre,
		pipeline,
	}
	var pipelineStream []bson.M
	for _, r := range stages {
		pipelineStream = append(pipelineStream, r...)
	}
	stream, errChangeStream := coll.Watch(context.TODO(), pipelineStream, &opts)
	if errChangeStream != nil {
		panic(errChangeStream)
	}
	return stream, errChangeStream

}
