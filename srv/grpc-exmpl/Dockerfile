FROM golang

COPY . /go/src/lagerist.io/srv/grpc-exmpl
WORKDIR /go/src/lagerist.io/srv/grpc-exmpl

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
