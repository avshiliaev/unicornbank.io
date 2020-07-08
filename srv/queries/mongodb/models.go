package mongodb

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type TransactionsWrite struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	Account   string             `bson:"account,omitempty"`
	Amount    float32            `bson:"amount,omitempty"`
	Info      string             `bson:"info,omitempty"`
	Status    string             `bson:"status,omitempty"`
	Timestamp int64              `bson:"timestamp,omitempty"`
	Uuid      string             `bson:"uuid,omitempty"`
}
type AccountsWrite struct {
	ID           primitive.ObjectID  `bson:"_id,omitempty"`
	Balance      float32             `bson:"balance,omitempty"`
	Profile      string              `bson:"profile,omitempty"`
	Status       string              `bson:"status,omitempty"`
	Transactions []TransactionsWrite `bson:"transactions,omitempty"`
	Uuid         string              `bson:"uuid,omitempty"`
}

type TransactionsRead struct {
	// ID        primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	Account   string    `bson:"account,omitempty" json:"account"`
	Amount    float32   `bson:"amount,omitempty" json:"amount"`
	Info      string    `bson:"info,omitempty" json:"info"`
	Status    string    `bson:"status,omitempty" json:"status"`
	Time      time.Time `bson:"time,omitempty" json:"time"`
	Uuid      string    `bson:"uuid,omitempty" json:"uuid"`
}
type AccountsRead struct {
	// ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	Balance      float32            `bson:"balance,omitempty" json:"balance"`
	Profile      string             `bson:"profile,omitempty" json:"profile"`
	Status       string             `bson:"status,omitempty" json:"status"`
	Transactions []TransactionsRead `bson:"transactions,omitempty" json:"transactions"`
	Uuid         string             `bson:"uuid,omitempty" json:"uuid"`
}
