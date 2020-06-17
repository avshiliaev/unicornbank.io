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

// Update all fields: we DO NOT know here what was updated!
func UpdateAccount(accountUpdated *queries.AccountUpdated) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	var account AccountsModel
	db.Where("uuid=?", accountUpdated.Uuid).Find(&account)
	account.Title = accountUpdated.Title
	account.Status = accountUpdated.Status
	account.Balance = accountUpdated.Balance
	db.Save(&account)
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

// Update all fields (which can be updated at least): we DO NOT know here what was updated!
func UpdateTransaction(transactionUpdated *queries.TransactionUpdated) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	var transaction TransactionsModel
	db.Where("uuid=?", transactionUpdated.Uuid).Find(&transaction)
	transaction.Status = transactionUpdated.Status
	transaction.Amount = transactionUpdated.Amount
	db.Save(&transaction)
}
