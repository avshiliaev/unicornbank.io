#!/usr/bin/env bash
curl -X POST localhost:8080/alter -d '{"drop_op": "DATA"}'
