package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	queries "unicornbank.io/srv/queries/proto/queries"
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

func CreateAccount(accountCreated *queries.AccountCreated) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{
		Uuid:    accountCreated.Uuid,
		Title:   accountCreated.Title,
		Status:  accountCreated.Status,
		Balance: accountCreated.Balance,
	}
	db.Save(&account)
}

func GetAccount(uuid string) AccountsModel {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{
		Uuid: uuid,
	}
	db.Take(&account)

	return account
}

func UpdateAccount(accountUpdated *AccountsModel) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.Save(&accountUpdated)
}

func CreateTransaction(transactionPlaced *queries.TransactionPlaced) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	transaction := TransactionsModel{
		Uuid:    transactionPlaced.Uuid,
		Account: transactionPlaced.Account,
		Amount:  transactionPlaced.Amount,
		Status:  transactionPlaced.Status,
	}
	db.Save(&transaction)
}

func GetTransaction(uuid string) TransactionsModel {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	transaction := TransactionsModel{
		Uuid: uuid,
	}
	db.Take(&transaction)

	return transaction
}

func UpdateTransaction(transactionUpdated *TransactionsModel) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.Save(&transactionUpdated)
}
