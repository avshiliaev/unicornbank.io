FROM golang as builder

COPY . /go/src/lagerist.io/srv/processing
WORKDIR /go/src/lagerist.io/srv/processing

RUN go get ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o processing .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/lagerist.io/srv/processing .
# CMD ["/root/processing"]
