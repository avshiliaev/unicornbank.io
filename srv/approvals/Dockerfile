FROM golang as builder

COPY . /go/src/lagerist.io/srv/approvals
WORKDIR /go/src/lagerist.io/srv/approvals

RUN go get ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o approvals .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/lagerist.io/srv/approvals .
# CMD ["/root/approvals"]
