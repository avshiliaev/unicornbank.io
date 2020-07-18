FROM golang as builder

COPY . /go/src/unicornbank.io/srv/accounts
WORKDIR /go/src/unicornbank.io/srv/accounts

RUN go get ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o accounts .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/unicornbank.io/srv/accounts .

RUN ["chmod", "+x", "./wait-for-it.sh"]
