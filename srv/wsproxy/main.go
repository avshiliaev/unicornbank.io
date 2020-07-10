package main

// https://github.com/micro-in-cn/tutorials/tree/master/examples

import (
	"context"
	"io"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
	"github.com/micro/go-micro/v2/client"
	"github.com/micro/go-micro/v2/client/grpc"
	"github.com/micro/go-micro/v2/web"
	wsproxy "srv/wsproxy/proto/wsproxy"
)

var (
	proxyToService = "go.micro.api.queries"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func Stream(cli wsproxy.QueriesService, ws *websocket.Conn) error {
	// Read initial request from websocket
	var req wsproxy.AccountsOverviewRequest
	err := ws.ReadJSON(&req)
	if err != nil {
		return err
	}

	// Even if we aren't expecting further requests from the websocket, we still need to read from it to ensure we
	// get close signals
	go func() {
		for {
			if _, _, err := ws.NextReader(); err != nil {
				break
			}
		}
	}()

	log.Printf("Received Request: %v", &req)

	// Send request to stream server
	stream, err := cli.AccountsOverview(context.Background(), &req)
	if err != nil {
		return err
	}
	defer stream.Close()

	// Read from the stream server and pass responses on to websocket
	for {
		// Read from stream, end request once the stream is closed
		rsp, err := stream.Recv()
		if err != nil {
			if err != io.EOF {
				return err
			}

			break
		}

		// Write server response to the websocket
		err = ws.WriteJSON(rsp)
		if err != nil {
			// End request if socket is closed
			if isExpectedClose(err) {
				log.Println("Expected Close on socket", err)
				break
			} else {
				return err
			}
		}
	}

	return nil
}

func isExpectedClose(err error) bool {
	if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway) {
		log.Println("Unexpected websocket close: ", err)
		return false
	}

	return true
}

func main() {
	// New web service
	service := web.NewService(
		web.Name("go.micro.web.streams"),
	)

	if err := service.Init(); err != nil {
		log.Fatal("Init", err)
	}

	// New RPC client
	rpcClient := grpc.NewClient(client.RequestTimeout(time.Second * 120))
	cli := wsproxy.NewQueriesService(proxyToService, rpcClient)

	// Handle websocket connection
	service.HandleFunc("/overview", func(w http.ResponseWriter, r *http.Request) {

		// Upgrade request to websocket
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			log.Fatal("Upgrade: ", err)
			return
		}
		defer conn.Close()

		// Handle websocket request
		if err := Stream(cli, conn); err != nil {
			log.Fatal("Echo: ", err)
			return
		}
		log.Println("Stream complete")
	})

	if err := service.Run(); err != nil {
		log.Fatal("Run: ", err)
	}
}
