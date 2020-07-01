package mongodb

import "go.mongodb.org/mongo-driver/bson"

func AccountsPipeline(profile string) []bson.M {
	pipeline := []bson.M{
		{"$match": bson.M{"profile": profile}},
		{"$project": bson.M{
			// "_id":     0,
			"uuid":    1,
			"profile": 1,
			"status":  1,
			"balance": 1,
			"transactions": bson.M{
				"$map": bson.M{
					"input": "$transactions",
					"as":    "tr",
					"in":    "$$tr.uuid",
				},
			},
		}},
	}
	return pipeline
}
