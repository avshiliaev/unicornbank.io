package mongodb

import "go.mongodb.org/mongo-driver/bson"

func OverviewPipeline(profile string) []bson.M {
	pipeline := []bson.M{
		{"$match": bson.M{"profile": profile}},
		{"$project": bson.M{
			"uuid":    1,
			"profile": 1,
			"status":  1,
			"balance": 1,
			"transactions": bson.M{"$filter": bson.M{
				"input": "$transactions",
				"as":    "tr",
				"cond":  bson.M{"$eq": bson.A{"$$tr.status", "pending"}},
			}},
		}},
	}
	return pipeline
}
