#!/usr/bin/env bash

micro api &
(cd srv/accounts; go run main.go) &
(cd srv/approvals; go run main.go) &
(cd srv/billings; go run main.go) &
(cd srv/queries; go run main.go) &
(cd srv/transactions; go run main.go) &
