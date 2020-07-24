#!/usr/bin/env bash

echo "------ ACCOUNTS: ------"
(cd srv/accounts; make build)
echo "------ APPROVALS: ------"
(cd srv/approvals; make build)
echo "------ BILLINGS: ------"
(cd srv/billings; make build)
echo "------ NOTIFICATIONS: ------"
(cd srv/notifications; make build)
echo "------ PROFILES: ------"
(cd srv/profiles; make build)
echo "------ TRANSACTIONS: ------"
(cd srv/transactions; make build)
echo "------ WSPROXY: ------"
(cd srv/wsproxy; make build)

docker-compose up --build
