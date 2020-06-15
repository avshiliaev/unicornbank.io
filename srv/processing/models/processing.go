package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	dialect = "sqlite3"
	args = "approvals.db"
)

type ApprovalsModel struct {
	gorm.Model
	Uuid string
	Status string
}

func Migrate() {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&ApprovalsModel{})
}

func Create(uuid string, status string) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := ApprovalsModel{Uuid: uuid, Status: status}
	db.Save(&account)
}
