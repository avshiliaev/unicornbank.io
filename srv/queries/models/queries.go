package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	dialect = "sqlite3"
	args    = "queries.db"
)

type AccountsModel struct {
	gorm.Model
	Uuid    string
	Title   string
	Status  string
	Balance float32
}

type TransactionsModel struct {
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
	db.AutoMigrate(&AccountsModel{})
	db.AutoMigrate(&TransactionsModel{})
}

func CreateAccount(uuid string, title string, status string, balance float32) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{Title: title, Uuid: uuid, Balance: balance, Status: status}
	db.Save(&account)
}

// Update all fields: we DO NOT know here what was updated!
func UpdateAccount(uuid string, title string, status string, balance float32) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{Uuid: uuid}
	db.Take(&account)
	// TODO Need a destructuring here or something
	account.Title = title
	account.Status = status
	account.Balance = balance
	db.Save(&account)
}

func CreateTransaction(uuid string, account string, amount float32, status string) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	transaction := TransactionsModel{Account: account, Uuid: uuid, Amount: amount, Status: status}
	db.Save(&transaction)
}

// Update all fields (which can be updated at least): we DO NOT know here what was updated!
func UpdateTransaction(uuid string, amount float32, status string) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	transaction := TransactionsModel{Uuid: uuid}
	db.Take(&transaction)
	// TODO Need a destructuring here or something
	transaction.Status = status
	transaction.Amount = amount
	db.Save(&transaction)
}
