
GOPATH:=$(shell go env GOPATH)
MODIFY=Mgithub.com/micro/go-micro/api/proto/api.proto=github.com/micro/go-micro/v2/api/proto

.PHONY: proto
proto:
    
	protoc --proto_path=. --micro_out=${MODIFY}:. --go_out=${MODIFY}:. proto/transactions/transactions.proto
    

.PHONY: build
build: proto

	CGO_ENABLED=0 GOOS=linux go build -o transactions-srv .

.PHONY: test
test:
	go test -v ./... -cover

.PHONY: docker
docker:
	docker build . -t transactions-srv:latest
