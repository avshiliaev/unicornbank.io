package mongodb

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

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
		{"$match": bson.M{"$or": bson.A{
			bson.M{"operationType": "insert"},
			bson.M{"operationType": "update"},
			bson.M{"operationType": "replace"},
		}}},
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
