const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8082/stream/stream')

const request = {foo: "bar"}

ws.on('open', function open () {
  console.log('connected')
  ws.send(JSON.stringify(request))
})

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  console.log(`Received: ${data}`)
})
