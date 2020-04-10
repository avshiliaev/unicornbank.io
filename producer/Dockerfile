FROM golang

COPY . /go/src/lagerist.io/srv/producer
WORKDIR /go/src/lagerist.io/srv/producer

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
