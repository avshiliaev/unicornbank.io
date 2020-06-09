# GQL Generator

`graphql get-schema && gqlg --schemaFilePath api/schema/schema.graphql --destDirPath ./api/schema/documents --depthLimit 5 && graphql-codegen --overwrite`

### 1. Download schema from endpoint
Graphql CLI

https://github.com/Urigo/graphql-cli

Command: ``graphql get-schema``

### 2. Generate GQL raw queries from schema
gql-generator

https://github.com/timqian/gql-generator

Command: ``gqlg --schemaFilePath schema/schema.graphql --destDirPath ./schema/documents --depthLimit 5``

### 3. Generate TS types from endpoint
Graphql Code Generator

https://graphql-code-generator.com/docs/getting-started/

Command: ``graphql-codegen``

### 4. Npm command: 

package.json:
```
  "scripts": {
    "generate": "graphql-codegen && graphql get-schema && gqlg --schemaFilePath schema/schema.graphql --destDirPath ./schema/documents --depthLimit 5"
  }
```

``npm run generate``

# Microservices

## Go Modules

https://blog.golang.org/using-go-modules

## Protobuf generator
https://developers.google.com/protocol-buffers/docs/reference/go-generated

```shell script
#!/usr/bin/env bash

protoc --proto_path="$GOPATH"/src:. --micro_out=. --go_out=. proto/pubsub.proto
```

### Problems

https://stackoverflow.com/a/57730314/10202443

## PubSub

https://itnext.io/micro-in-action-part4-pub-sub-564f3b054ecd

**With address**

http://adityar.com/go-micro-pub-sub

## RabbitMQ

Dashboard: 
localhost:15672

## Consul

http://localhost:8500/ui/

# Go Micro

## In root of the project

`go install github.com/micro/micro/v2`

`go get github.com/micro/micro/v2/cmd/protoc-gen-micro@master`

`protoc --proto_path=$GOPATH/src:. --micro_out=. --go_out=. api/proto/greeter.proto`

## Writing a service

https://micro.mu/docs/writing-a-go-service.html
