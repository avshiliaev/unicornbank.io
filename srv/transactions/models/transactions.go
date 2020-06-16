package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	dialect = "sqlite3"
	args    = "transactions.db"
)

type TransactionModel struct {
	gorm.Model
	Uuid    string
	Account string
	Amount  float32
}

func Migrate() {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&TransactionModel{})
}

func Create(uuid string, account string, amount float32) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	transaction := TransactionModel{Account: account, Uuid: uuid, Amount: amount}
	db.Save(&transaction)
}
