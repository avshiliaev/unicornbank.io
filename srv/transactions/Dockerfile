FROM golang as builder

COPY . /go/src/unicornbank.io/srv/transactions
WORKDIR /go/src/unicornbank.io/srv/transactions

RUN go get ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o transactions .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/unicornbank.io/srv/transactions .
# CMD ["/root/transactions"]
