#!/usr/bin/env bash

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker run -d -it -p 8080:8080 dgraph/standalone:v2.0.0-rc1
sleep 20
jq -n --arg schema "$(cat types.graphql)" '{ query: "mutation updateGQLSchema($sch: String!) { updateGQLSchema(input: { set: { schema: $sch }}) { gqlSchema { schema } } }", variables: { sch: $schema }}' | curl -X POST -H "Content-Type: application/json" http://localhost:8080/admin -d @- | jq -r
sleep 5
npm run generate
sleep 2
bash populate.sh


