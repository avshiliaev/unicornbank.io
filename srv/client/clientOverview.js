const WebSocket = require('ws')

const ws = new WebSocket(
  'ws://localhost:8082/streams?profile=wonder',
)

let state = []

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  const action = JSON.parse(data);

  console.log(action.payload)
})
