package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	accounts "unicornbank.io/srv/accounts/proto/accounts"
)

var (
	dialect = "sqlite3"
	args    = "accounts.db"
)

type AccountsModel struct {
	gorm.Model
	Uuid    string
	Title   string
	Balance float32
	Status  string
}

func Migrate() {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&AccountsModel{})
}

func Get(uuid string) AccountsModel {
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

func Create(accountCreated *accounts.AccountCreatedOrUpdated) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{
		Title:   accountCreated.Title,
		Uuid:    accountCreated.Uuid,
		Balance: accountCreated.Balance,
		Status:  accountCreated.Status,
	}
	db.Save(&account)
}

func Update(accountUpdated *accounts.AccountCreatedOrUpdated) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{
		Uuid: accountUpdated.Uuid,
	}
	db.Take(&account)
	account.Title = accountUpdated.Title
	account.Balance = accountUpdated.Balance
	account.Status = accountUpdated.Status
	db.Save(&account)
}
