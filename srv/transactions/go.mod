module unicornbank.io/srv/transactions

go 1.13

// This can be removed once etcd becomes go gettable, version 3.4 and 3.5 is not,
// see https://github.com/etcd-io/etcd/issues/11154 and https://github.com/etcd-io/etcd/issues/11931.
replace google.golang.org/grpc => google.golang.org/grpc v1.26.0

require (
	github.com/golang/protobuf v1.4.2
	github.com/google/uuid v1.1.1
	github.com/jinzhu/gorm v1.9.12 // indirect
	github.com/micro/go-micro/v2 v2.9.0
	github.com/pborman/uuid v1.2.0 // indirect
	go.mongodb.org/mongo-driver v1.3.4
	google.golang.org/protobuf v1.24.0
)
