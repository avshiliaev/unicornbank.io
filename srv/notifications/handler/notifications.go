package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"unicornbank.io/srv/notifications/mongodb"
	notifications "unicornbank.io/srv/notifications/proto/notifications"
)

type Notifications struct {
	Coll *mongo.Collection
}

// Stream is a server side stream handler called via client.Stream or the generated client code
func (e *Notifications) Overview(
	ctx context.Context,
	req *notifications.NotificationsStreamRequest,
	stream notifications.Notifications_OverviewStream,
) error {

	log.Infof("Received Notifications.Stream OverviewRequest to profile: %d", req.Profile)

	// Prepare mongo pipeline
	// 		{ "$limit" : limit },
	pipeline := mongodb.OverviewPipeline(req.Profile)

	// Send the initial state
	var state []mongodb.NotificationsModel
	cursor := mongodb.Aggregate(append(pipeline, bson.M{ "$limit" : req.Count }), e.Coll, ctx)
	_ = cursor.All(ctx, &state)
	stateNormalized := NormalizeStream(state)
	_ = stream.Send(&notifications.NotificationsStreamResponse{
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
		var update mongodb.NotificationsModel
		if err := mongoStream.Decode(&update); err != nil {
			log.Fatal(err)
			break
		}
		updateNormalized := NormalizeStream(
			append(make([]mongodb.NotificationsModel, 0), update),
		)
		_ = stream.Send(&notifications.NotificationsStreamResponse{
			Type:    "update",
			Payload: updateNormalized,
		})
	}

	return nil
}
