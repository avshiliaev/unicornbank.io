FROM golang

COPY . /go/src/lagerist.io/srv/projects
WORKDIR /go/src/lagerist.io/srv/projects

RUN go get ./...
RUN go build
RUN ["chmod", "+x", "./wait-for-it.sh"]
