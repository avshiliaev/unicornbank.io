FROM golang

COPY . /go/src/lagerist.io/srv/gateway
WORKDIR /go/src/lagerist.io/srv/gateway

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
