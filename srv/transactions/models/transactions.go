package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	transactions "unicornbank.io/srv/transactions/proto/transactions"
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
	Status  string
}

func Migrate() {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&TransactionModel{})
}

func Get(uuid string) TransactionModel {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	var transaction TransactionModel
	db.Where("uuid = ?", uuid).Find(&transaction)

	return transaction
}

func Create(transactionPlaced *transactions.TransactionType) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	transaction := TransactionModel{
		Uuid:    transactionPlaced.Uuid,
		Account: transactionPlaced.Account,
		Amount:  transactionPlaced.Amount,
		Status:  transactionPlaced.Status,
	}
	db.Save(&transaction)
}

func Update(transactionUpdated *TransactionModel) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.Save(&transactionUpdated)
}
