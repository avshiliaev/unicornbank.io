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
	req *queries.StreamRequest,
	stream queries.Queries_AccountsOverviewStream,
) error {

	log.Infof("Received Queries.Stream AccountsOverviewRequest to profile: %d", req.Profile)

	// Prepare mongo pipeline
	pipeline := mongodb.OverviewPipeline(req.Profile)

	// Send the initial state
	var state []mongodb.AccountsModel
	cursor := mongodb.Aggregate(pipeline, e.Coll, ctx)
	_ = cursor.All(ctx, &state)
	stateNormalized := NormalizeStream(state)
	_ = stream.Send(&queries.StreamResponse{
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
		var update mongodb.AccountsModel
		if err := mongoStream.Decode(&update); err != nil {
			log.Fatal(err)
			break
		}
		updateNormalized := NormalizeStream(
			append(make([]mongodb.AccountsModel, 0), update),
		)
		_ = stream.Send(&queries.StreamResponse{
			Type:    "update",
			Payload: updateNormalized,
		})
	}

	return nil
}

func (e *Queries) AccountDetail(
	ctx context.Context,
	req *queries.StreamRequest,
	stream queries.Queries_AccountDetailStream,
) error {
	log.Infof("Received Queries.Stream AccountDetailRequest to uuid: %d", req.Uuid)

	// Prepare mongo pipeline
	pipeline := mongodb.DetailPipeline(req.Uuid)

	// Send the initial state
	var state []mongodb.AccountsModel
	cursor := mongodb.Aggregate(pipeline, e.Coll, ctx)
	if err := cursor.All(ctx, &state); err != nil {
		log.Info(err)
	}
	stateNormalized := NormalizeStream(state)
	if err := stream.Send(&queries.StreamResponse{
		Type:    "init",
		Payload: stateNormalized,
	}); err != nil {
		log.Info(err)
	}

	// Initialize stream cursor
	mongoStream, streamError := mongodb.StreamChanges(pipeline, e.Coll)
	if streamError != nil {
		log.Fatal(streamError)
	}
	defer mongoStream.Close(context.TODO())

	// Iterate over the stream updates
	for mongoStream.Next(context.TODO()) {
		var update mongodb.AccountsModel
		if err := mongoStream.Decode(&update); err != nil {
			log.Fatal(err)
			break
		}
		updateNormalized := NormalizeStream(
			append(make([]mongodb.AccountsModel, 0), update),
		)
		_ = stream.Send(&queries.StreamResponse{
			Type:    "update",
			Payload: updateNormalized,
		})
	}

	return nil
}
