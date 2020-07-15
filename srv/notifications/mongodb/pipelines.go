package mongodb

import "go.mongodb.org/mongo-driver/bson"

func OverviewPipeline(profile string) []bson.M {
	pipeline := []bson.M{
		{"$match": bson.M{"profile": profile}},
	}
	return pipeline
}
