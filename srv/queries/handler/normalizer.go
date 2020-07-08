package handler

import (
	"unicornbank.io/srv/queries/mongodb"
	queries "unicornbank.io/srv/queries/proto/queries"
)

func NormalizeOverviewStream(input []mongodb.AccountsRead) []*queries.AccountDTO {
	accounts := make([]*queries.AccountDTO, 0)
	for _, acc := range input {
		transactions := make([]*queries.TransactionDTO, 0)
		for _, tr := range acc.Transactions {
			next := queries.TransactionDTO{
				Account: tr.Account,
				Amount:  tr.Amount,
				Info:    tr.Info,
				Status:  tr.Status,
				Time:    tr.Time.String(),
				Uuid:    tr.Uuid,
			}
			transactions = append(transactions, &next)
		}
		next := queries.AccountDTO{
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
