#!/usr/bin/env bash
curl -X POST localhost:8080/alter -d '{"drop_op": "DATA"}'

# shellcheck disable=SC2016
USERS=$(curl 'localhost:8080/graphql' -H 'Content-Type: application/json' \
  -d '{
    "query": "mutation addUser($input: [AddUserInput!]!){addUser(input: $input){user{id, username}}}",
    "variables": {
      "input": [
        {"username": "thehost"},
        {"username": "superrust"},
        {"username": "rusty"},
        {"username": "cargo"},
        {"username": "hisuperhi"}
      ]
    }
  }' )

USER0=$(echo "$USERS" | jq '.data.addUser.user[] | select(.username == "superrust")' )
USER1=$(echo "$USERS" | jq '.data.addUser.user[] | select(.username == "rusty")' )
USER2=$(echo "$USERS" | jq '.data.addUser.user[] | select(.username == "cargo")' )
HEREIAM=$(echo "$USERS" | jq '.data.addUser.user[] | select(.username == "hisuperhi")' )
THEHOST=$(echo "$USERS" | jq '.data.addUser.user[] | select(.username == "thehost")' )

# shellcheck disable=SC2016
curl 'localhost:8080/graphql' -H 'Content-Type: application/json' \
  -d '{
    "query": "mutation addProject($input: [AddProjectInput!]!){addProject(input: $input){project{id}}}",
    "variables": {
      "input": [
        {
          "title": "Getting Started",
          "description": "Let’s start your Rust journey! There’s a lot to learn, but every journey starts somewhere.",
          "developers":[
            {"name":"hisuperhi", "user": ['"$HEREIAM"']},
            {"name":"rusty_crusty", "user": ['"$USER1"']},
            {"name":"cargoo", "user": ['"$USER2"']}
          ],
          "hosts": ['"$THEHOST"'],
          "entities": [
            {
              "title": "Installation",
              "description": "description",
              "status": "READY"
            },
            {
              "title": "Hello, World!",
              "description": "description",
              "status": "READY"
            },
            {
              "title": "Hello, Cargo!",
              "description": "description",
              "status": "READY"
            }
          ]
        },
        {
          "title": "Programming a Guessing Game",
          "description": "Let’s jump into Rust by working through a hands-on project together! This chapter introduces you to a few common Rust concepts by showing you how to use them in a real program.",
          "developers":[
            {"name":"hisuperhi", "user": ['"$HEREIAM"']},
            {"name":"anonymRust", "user": ['"$USER0"']},
            {"name":"rusty_crusty", "user": ['"$USER1"']},
            {"name":"cargoo", "user": ['"$USER2"']}
          ],
          "hosts": ['"$THEHOST"']
        },
        {
          "title": "Understanding Ownership",
          "description": "Ownership is Rust’s most unique feature, and it enables Rust to make memory safety guarantees without needing a garbage collector.",
          "developers":[
            {"name":"anonymRust", "user": ['"$USER0"']},
            {"name":"cargoo", "user": ['"$USER2"']}
          ],
          "hosts": ['"$THEHOST"']
        },
        {
          "title": "Enums and Pattern Matching",
          "description": "In this chapter we’ll look at enumerations, also referred to as enums. Enums allow you to define a type by enumerating its possible variants.",
          "developers":[
            {"name":"anonymRust", "user": ['"$USER0"']},
            {"name":"cargoo", "user": ['"$USER2"']}
          ],
          "hosts": ['"$THEHOST"']
        }
      ]
    }
  }'

