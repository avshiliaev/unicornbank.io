package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	approvals "unicornbank.io/srv/approvals/proto/approvals"
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

func Create(accountApproved *approvals.AccountApprovalType) {
	db, err := gorm.Open(dialect, args)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()
	account := ApprovalsModel{
		Uuid: accountApproved.Uuid,
		Status: accountApproved.Status,
	}
	db.Save(&account)
}
