#!/usr/bin/env bash

docker run -d -it -p 8080:8080 dgraph/standalone:v1.2.0-rc1
sleep 30
jq -n --arg schema "$(cat types.graphql)" '{ query: "mutation updateGQLSchema($sch: String!) { updateGQLSchema(input: { set: { schema: $sch }}) { gqlSchema { schema } } }", variables: { sch: $schema }}' | curl -X POST -H "Content-Type: application/json" http://localhost:8080/admin -d @- | jq -r
sleep 5
# shellcheck disable=SC2016
USERS=$(curl 'localhost:8080/graphql' -H 'Content-Type: application/json' \
  -d '{
    "query": "mutation addUser($input: [AddUserInput!]!){addUser(input: $input){user{id}}}",
    "variables": {
      "input": [
        {"username": "superrust", "password":"superrust", "location":"Frankfurt"},
        {"username": "rusty", "password":"rusty", "location":"Munich"},
        {"username": "cargo", "password":"cargo", "location":"Hamburg"},
        {"username": "hisuperhi", "password":"hisuperhi", "location":"Cologne"}
      ]
    }
  }' )

USER0=$(echo "$USERS" | jq '.data.addUser.user[0]')
USER1=$(echo "$USERS" | jq '.data.addUser.user[1]')
USER2=$(echo "$USERS" | jq '.data.addUser.user[2]')
ADMIN=$(echo "$USERS" | jq '.data.addUser.user[3]')

# shellcheck disable=SC2016
curl 'localhost:8080/graphql' -H 'Content-Type: application/json' \
  -d '{
    "query": "mutation addProject($input: [AddProjectInput!]!){addProject(input: $input){project{id}}}",
    "variables": {
      "input": [
        {
          "title": "Getting Started",
          "description": "Let’s start your Rust journey! There’s a lot to learn, but every journey starts somewhere.",
          "tags":[{"title":"rust"},{"title":"beginner"}],
          "boards": [{"title": "main", "columns": [{"title": "todo"}, {"title": "doing"}, {"title": "done"}]}],
          "workers":[
            {"name":"rusty_crusty", "availability":15, "user": '"$ADMIN"'},
            {"name":"anonymRust", "availability":99, "user": '"$USER0"'},
            {"name":"rusty_crusty", "availability":10, "user": '"$USER1"'},
            {"name":"cargoo", "availability":56, "user": '"$USER2"'}
          ],
          "tasks": [
            {
              "title": "Installation",
              "deadline":"01-04-2020",
              "content": "The first step is to install Rust. We’ll download Rust through rustup, a command line tool for managing Rust versions and associated tools. You’ll need an internet connection for the download.",
              "priority":1,
              "complete": false,
              "hours":2
            },
            {
              "title": "Hello, World!",
              "deadline":"02-04-2020",
              "content": "Now that you’ve installed Rust, let’s write your first Rust program.",
              "priority":2,
              "complete": false,
              "hours":3
            },
            {
              "title": "Hello, Cargo!",
              "deadline":"03-04-2020",
              "content": "Cargo is Rust’s build system and package manager. Most Rustaceans use this tool to manage their Rust projects because Cargo handles a lot of tasks for you, such as building your code, downloading the libraries your code depends on, and building those libraries. (We call libraries your code needs dependencies.)",
              "priority":3,
              "complete": false,
              "hours":4
            }
          ]
        },
        {
          "title": "Programming a Guessing Game",
          "description": "Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program.",
          "tags":[{"title":"example"},{"title":"hands-on"},{"title":"game"}],
          "boards": [{"title": "main", "columns": [{"title": "todo"}, {"title": "doing"}, {"title": "done"}]}],
          "workers":[
            {"name":"rusty_crusty", "availability":15, "user": '"$ADMIN"'},
            {"name":"rusty_crusty", "availability":2, "user": '"$USER1"'},
            {"name":"cargoo", "availability":12, "user": '"$USER2"'}
          ]
        },
        {
          "title": "Understanding Ownership",
          "description": "Ownership is Rust’s most unique feature, and it enables Rust to make memory safety guarantees without needing a garbage collector.",
          "tags":[{"title":"ownership"},{"title":"rust"},{"title":"garbage collector"}],
          "boards": [{"title": "main", "columns": [{"title": "todo"}, {"title": "doing"}, {"title": "done"}]}],
          "workers":[
            {"name":"rusty_crusty", "availability":15, "user": '"$ADMIN"'},
            {"name":"anonymRust", "availability":2, "user": '"$USER0"'},
            {"name":"cargoo", "availability":33, "user": '"$USER2"'}
          ]
        }
      ]
    }
  }'

