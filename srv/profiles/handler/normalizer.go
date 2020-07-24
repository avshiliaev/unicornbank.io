package handler

import (
	"unicornbank.io/srv/profiles/mongodb"
	profiles "unicornbank.io/srv/profiles/proto/profiles"
)

func NormalizeStream(input []mongodb.AccountsModel) []*profiles.AccountDTO {
	accounts := make([]*profiles.AccountDTO, 0)
	for _, acc := range input {
		transactions := make([]*profiles.TransactionDTO, 0)
		for _, tr := range acc.Transactions {
			next := profiles.TransactionDTO{
				Account: tr.Account,
				Amount:  tr.Amount,
				Info:    tr.Info,
				Status:  tr.Status,
				Time:    tr.Time,
				Uuid:    tr.Uuid,
			}
			transactions = append(transactions, &next)
		}
		next := profiles.AccountDTO{
			Balance:      acc.Balance,
			Profile:      acc.Profile,
			Status:       acc.Status,
			Transactions: transactions,
			Uuid:         acc.Uuid,
		}
		accounts = append(accounts, &next)
	}
	return accounts
}
