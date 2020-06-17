package handler

import (
	"context"
	log "github.com/micro/go-micro/v2/logger"
	queries "unicornbank.io/srv/queries/proto/queries"
)

type Queries struct {}

// Call is a single request handler called via client.Call or the generated client code
func (e *Queries) Call(ctx context.Context, req *queries.Request, rsp *queries.Response) error {
	log.Info("Received Queries.Call request")
	rsp.UserId = "Hello " + req.UserId
	return nil
}
