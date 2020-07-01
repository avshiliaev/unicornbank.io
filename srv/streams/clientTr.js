const WebSocket = require('ws')

const ws = new WebSocket(
  'ws://localhost:8082/streams/transactions?account=af6694ef-e84b-4a61-b51a-89b394f3aec9'
)

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  let message = JSON.parse(data)
  let doc = message.payload
  console.log(doc.transactions.map(tr => tr.status))
})
