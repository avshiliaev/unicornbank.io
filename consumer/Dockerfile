FROM golang

COPY . /go/src/lagerist.io/srv/consumer
WORKDIR /go/src/lagerist.io/srv/consumer

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
