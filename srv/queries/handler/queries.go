package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/queries/mongodb"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct {
	Coll *mongo.Collection
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Queries) AccountsOverview(
	ctx context.Context,
	req *queries.AccountsOverviewRequest,
	stream queries.Queries_AccountsOverviewStream,
) error {

	log.Infof("Received Queries.Stream AccountsOverviewRequest to profile: %d", req.Profile)

	// Prepare mongo pipeline
	pipeline := mongodb.OverviewPipeline(req.Profile)

	// Send the initial state
	var state []mongodb.AccountsRead
	cursor := mongodb.Aggregate(pipeline, e.Coll, ctx)
	_ = cursor.All(ctx, &state)
	stateNormalized := NormalizeOverviewStream(state)
	_ = stream.Send(&queries.AccountsOverviewResponse{
		Type:    "init",
		Payload: stateNormalized,
	})

	// Initialize stream cursor
	mongoStream, streamError := mongodb.StreamChanges(pipeline, e.Coll)
	if streamError != nil {
		log.Fatal(streamError)
	}
	defer mongoStream.Close(context.TODO())

	// Iterate over the stream updates
	for mongoStream.Next(context.TODO()) {
		var update mongodb.AccountsRead
		if err := mongoStream.Decode(&update); err != nil {
			log.Fatal(err)
			break
		}
		updateNormalized := NormalizeOverviewStream(
			append(make([]mongodb.AccountsRead, 0), update),
		)
		_ = stream.Send(&queries.AccountsOverviewResponse{
			Type:    "update",
			Payload: updateNormalized,
		})
	}

	return nil
}

func (e *Queries) AccountDetail(
	ctx context.Context,
	req *queries.AccountDetailRequest,
	stream queries.Queries_AccountDetailStream,
) error {
	log.Infof("Received Queries.Stream AccountDetailRequest to uuid: %d", req.Uuid)

	// Prepare mongo pipeline
	pipeline := mongodb.DetailPipeline(req.Uuid)

	// Send the initial state
	var state mongodb.AccountsRead
	cursor := mongodb.Aggregate(pipeline, e.Coll, ctx)
	_ = cursor.All(ctx, &state)
	stateNormalized := NormalizeDetailStream(state)
	_ = stream.Send(&queries.AccountDetailResponse{
		Type:    "init",
		Payload: stateNormalized,
	})

	// Initialize stream cursor
	mongoStream, streamError := mongodb.StreamChanges(pipeline, e.Coll)
	if streamError != nil {
		log.Fatal(streamError)
	}
	defer mongoStream.Close(context.TODO())

	// Iterate over the stream updates
	for mongoStream.Next(context.TODO()) {
		var update mongodb.AccountsRead
		if err := mongoStream.Decode(&update); err != nil {
			log.Fatal(err)
			break
		}
		updateNormalized := NormalizeDetailStream(update)
		_ = stream.Send(&queries.AccountDetailResponse{
			Type:    "update",
			Payload: updateNormalized,
		})
	}

	return nil
}
