package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/queries/models"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct{}

func (e *Queries) GetUserState(
	ctx context.Context,
	req *queries.UserStateRequest,
	rsp *queries.UserStateResponse,
) error {
	log.Info("Received Queries.GetUserState request")
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

func (e *Queries) GetAccountDetail(
	ctx context.Context,
	req *queries.AccountDetailRequest,
	rsp *queries.AccountType,
) error {
	log.Info("Received Queries.GetAccountDetail request")
	account := models.GetAccount(req.Uuid)

	rsp.Uuid = account.Uuid
	rsp.Status = account.Status
	rsp.Title = account.Title
	rsp.Balance = account.Balance

	return nil
}
