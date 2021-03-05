# Microservices

## Quick start

1. Put a .env file, or define the following environment variables:
   * MONGO_URI
   * RABBITMQ_URL 
1. Run the `build.sh` script for a quick start with docker-compose. 

## Protobuf generators

More on this [here](https://developers.google.com/protocol-buffers/docs/reference/go-generated).

```shell script
#!/usr/bin/env bash

protoc --proto_path="$GOPATH"/src:. --micro_out=. --go_out=. proto/pubsub.proto
```

# Go Micro

More on writing a service in Go Micro [here](https://micro.mu/docs/writing-a-go-service.html).

## In root of the project

`go install github.com/micro/micro/v2`

`go get github.com/micro/micro/v2/cmd/protoc-gen-micro@master`

`protoc --proto_path=$GOPATH/src:. --micro_out=. --go_out=. api/proto/greeter.proto`
