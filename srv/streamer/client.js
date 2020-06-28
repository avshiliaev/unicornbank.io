const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8082/stream/stream')

const request = "wonder"

ws.on('open', function open () {
  console.log('connected')
  ws.send(request)
})

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  let message = JSON.parse(data)
  let total = message.operationType
  console.log(total)
})
