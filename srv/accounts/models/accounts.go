package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	dialect = "sqlite3"
	args = "accounts.db"
)

type AccountsModel struct {
	gorm.Model
	Uuid string
	Title string
	Balance float32
}

func Migrate() {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&AccountsModel{})
}

func Create(uuid string, title string, balance float32) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := AccountsModel{Title: title, Uuid: uuid, Balance: balance}
	db.Save(&account)
}
