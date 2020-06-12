FROM golang

COPY . /go/src/lagerist.io/srv/entities
WORKDIR /go/src/lagerist.io/srv/entities

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
