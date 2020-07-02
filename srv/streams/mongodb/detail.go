package mongodb

import "go.mongodb.org/mongo-driver/bson"

func DetailPipeline(account string) []bson.M {
	pipeline := []bson.M{
		{"$match": bson.M{"uuid": account}},
		{"$project": bson.M{
			"uuid":         1,
			"profile":      1,
			"status":       1,
			"balance":      1,
			"transactions": 1,
		}},
	}
	return pipeline
}
