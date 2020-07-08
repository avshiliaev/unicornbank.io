package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/queries/mongodb"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct{
	Coll *mongo.Collection
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Queries) AccountsOverview(ctx context.Context, req *queries.AccountsOverviewRequest, stream queries.Queries_AccountsOverviewStream) error {
	log.Infof("Received Queries.Stream AccountsOverviewRequest to profile: %d", req.Profile)

	// Prepare mongo pipeline
	pipeline := mongodb.OverviewPipeline(req.Profile)

	// Send the initial state
	var state []*queries.AccountDTO
	cursor := mongodb.Aggregate(pipeline, e.Coll, ctx)
	_ = cursor.All(ctx, &state)
	_ = stream.Send(&queries.AccountsOverviewResponse{
		Type:    "init",
		Payload: state,
	})

	// Initialize stream cursor
	mongoStream, streamError := mongodb.StreamChanges(pipeline, e.Coll)
	if streamError != nil {
		log.Fatal(streamError)
	}
	defer mongoStream.Close(context.TODO())

	// Iterate over the stream updates
	for mongoStream.Next(context.TODO()) {
		var data queries.AccountDTO
		if err := mongoStream.Decode(&data); err != nil {
			log.Fatal(err)
			break
		}
		_ = stream.Send(&queries.AccountsOverviewResponse{
			Type:    "update",
			Payload: state,
		})
	}

	return nil
}

func (e *Queries) AccountDetail(ctx context.Context, req *queries.AccountDetailRequest, stream queries.Queries_AccountDetailStream) error {
	log.Infof("Received Queries.Stream AccountDetailRequest to uuid: %d", req.Uuid)

	return nil
}
