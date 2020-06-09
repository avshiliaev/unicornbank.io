FROM golang

COPY . /go/src/lagerist.io/srv/web
WORKDIR /go/src/lagerist.io/srv/web

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
