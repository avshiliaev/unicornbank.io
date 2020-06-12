FROM golang

COPY . /go/src/lagerist.io/srv/processing
WORKDIR /go/src/lagerist.io/srv/processing

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
