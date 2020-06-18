package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/models"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct{}

func (e *Queries) Get(ctx context.Context, req *queries.Request, rsp *queries.Response) error {
	log.Info("Received Queries.Get request")
	accountsDB := models.GetAllAccounts(req.UserId)
	accountsResponse := make([]*queries.AccountType, len(accountsDB))
	for i, account := range accountsDB {
		accountsResponse[i] = &queries.AccountType{
			Uuid:    account.Uuid,
			Status:  account.Status,
			Title:   account.Title,
			Balance: account.Balance,
		}
	}
	rsp.UserId = req.UserId
	rsp.Accounts = accountsResponse
	return nil
}
