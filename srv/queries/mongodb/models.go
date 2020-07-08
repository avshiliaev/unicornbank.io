package mongodb

import "go.mongodb.org/mongo-driver/bson/primitive"

type TransactionsModel struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	Account   string             `bson:"account,omitempty"`
	Amount    float32            `bson:"amount,omitempty"`
	Info      string             `bson:"info,omitempty"`
	Status    string             `bson:"status,omitempty"`
	Timestamp int64              `bson:"timestamp,omitempty"`
	Uuid      string             `bson:"uuid,omitempty"`
}
type AccountsModel struct {
	ID           primitive.ObjectID  `bson:"_id,omitempty"`
	Balance      float32             `bson:"balance,omitempty"`
	Profile      string              `bson:"profile,omitempty"`
	Status       string              `bson:"status,omitempty"`
	Transactions []TransactionsModel `bson:"transactions,omitempty"`
	Uuid         string              `bson:"uuid,omitempty"`
}
