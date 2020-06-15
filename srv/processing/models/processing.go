package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var (
	dialect = "sqlite3"
	args = "processing.db"
)

type ProcessingModel struct {
	gorm.Model
	Title string
}

func Migrate() {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&ProcessingModel{})
}

func Create(title string) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.Create(&ProcessingModel{Title: title})
}
