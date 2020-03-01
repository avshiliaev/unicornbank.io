#!/usr/bin/env bash

docker run -d -it -p 8080:8080 dgraph/standalone:v1.2.0-rc1

jq -n --arg schema "$(cat types.graphql)" '{ query: "mutation updateGQLSchema($sch: String!) { updateGQLSchema(input: { set: { schema: $sch }}) { gqlSchema { schema } } }", variables: { sch: $schema }}' | curl -X POST -H "Content-Type: application/json" http://localhost:8080/admin -d @- | jq -r

