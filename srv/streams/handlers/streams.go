package handlers

import "time"

type TransactionType struct {
	// ID        primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	Account   string    `bson:"account,omitempty" json:"account"`
	Amount    float32   `bson:"amount,omitempty" json:"amount"`
	Info      string    `bson:"info,omitempty" json:"info"`
	Status    string    `bson:"status,omitempty" json:"status"`
	Time      time.Time `bson:"time,omitempty" json:"time"`
	Timestamp int64     `bson:"timestamp,omitempty" json:"timestamp"`
	Uuid      string    `bson:"uuid,omitempty" json:"uuid"`
}
type AccountType struct {
	// ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	Balance      float32           `bson:"balance,omitempty" json:"balance"`
	Profile      string            `bson:"profile,omitempty" json:"profile"`
	Status       string            `bson:"status,omitempty" json:"status"`
	Transactions []TransactionType `bson:"transactions,omitempty" json:"transactions"`
	Uuid         string            `bson:"uuid,omitempty" json:"uuid"`
}
