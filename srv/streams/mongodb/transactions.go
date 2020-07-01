package mongodb

import "go.mongodb.org/mongo-driver/bson"

func TransactionsPipeline(account string) []bson.M {
	pipeline := []bson.M{
		{"$match": bson.M{"uuid": account}},
		{"$project": bson.M{
			// "_id":          0,
			"transactions": 1,
		}},
	}
	return pipeline
}
