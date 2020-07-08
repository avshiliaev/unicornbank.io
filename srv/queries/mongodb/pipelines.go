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

func DetailPipeline(uuid string) []bson.M {
	pipeline := []bson.M{
		{"$match": bson.M{"uuid": uuid}},
		// Sort
		// {"$unwind": "$transactions"},
		// {"$sort": bson.M{"transactions.timestamp": -1}},
		// {"$group": bson.M{
		// 	"_id":          "$_id",
		// 	"uuid":         bson.M{"$first": "$uuid"},
		// 	"profile":      bson.M{"$first": "$profile"},
		// 	"status":       bson.M{"$first": "$status"},
		// 	"balance":      bson.M{"$first": "$balance"},
		// 	"transactions": bson.M{"$push": "$transactions"},
		// }},
		{"$project": bson.M{
			"uuid":    1,
			"profile": 1,
			"status":  1,
			"balance": 1,
			"transactions": bson.M{
				"$map": bson.M{
					"input": "$transactions",
					"as":    "tr",
					"in": bson.M{
						"account": "$$tr.account",
						"amount":  "$$tr.amount",
						"info":    "$$tr.info",
						"status":  "$$tr.status",
						"time": bson.M{
							"$dateToString": bson.M{
								"date":   bson.M{"$toDate": bson.M{"$multiply": bson.A{"$$tr.timestamp", 1000}}},
								"format": "%d.%m.%Y %H:%M",
							},
						},
						"uuid": "$$tr.uuid",
					},
				},
			},
		}},
	}
	return pipeline
}
