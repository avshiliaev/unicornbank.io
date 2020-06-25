package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	"unicornbank.io/srv/profiles/models"
	profiles "unicornbank.io/srv/profiles/proto/profiles"
)

type Profiles struct{}

func (e *Profiles) GetUserState(
	ctx context.Context,
	req *profiles.UserStateRequest,
	rsp *profiles.UserStateResponse,
) error {
	log.Info("Received Profiles.GetUserState request")
	accountsDB := models.GetAllAccounts(req.UserId)
	accountsResponse := make([]*profiles.AccountResponseType, len(accountsDB))
	for i, account := range accountsDB {
		accountsResponse[i] = &profiles.AccountResponseType{
			Uuid:         account.Uuid,
			Status:       account.Status,
			Title:        account.Title,
			Balance:      account.Balance,
			Transactions: make([]*profiles.TransactionType, 0),
		}
	}
	rsp.UserId = req.UserId
	rsp.Accounts = accountsResponse
	return nil
}

func (e *Profiles) GetAccountDetail(
	ctx context.Context,
	req *profiles.AccountDetailRequest,
	rsp *profiles.AccountResponseType,
) error {
	log.Info("Received Profiles.GetAccountDetail request")
	account := models.GetAccount(req.Uuid)

	rsp.Uuid = account.Uuid
	rsp.Status = account.Status
	rsp.Title = account.Title
	rsp.Balance = account.Balance
	rsp.Transactions = make([]*profiles.TransactionType, 0)

	return nil
}
