package models

import (
	"github.com/jinzhu/gorm"
)

type ProjectModel struct {
	gorm.Model
	Title string
}

func Migrate() {
	db, err := gorm.Open("sqlite3", "test.db")
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.AutoMigrate(&ProjectModel{})
}

func Create(title string) {
	db, err := gorm.Open("sqlite3", "test.db")
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	db.Create(&ProjectModel{Title: title})
}
