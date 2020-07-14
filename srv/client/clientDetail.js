const WebSocket = require('ws')

const ws = new WebSocket(
  'ws://localhost:8082/streams?profile=wonder&account=774de7a9-8cdd-46ad-8cd8-51057b1779cc',
)

let state = []

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  const action = JSON.parse(data);

  console.log(action.payload)
})
