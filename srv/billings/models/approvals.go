package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	dialect = "sqlite3"
	args = "billings.db"
)

type BillingsModel struct {
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
	db.AutoMigrate(&BillingsModel{})
}

func Create(uuid string, status string) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	billing := BillingsModel{Uuid: uuid, Status: status}
	db.Save(&billing)
}
