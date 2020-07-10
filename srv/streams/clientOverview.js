const WebSocket = require('ws')

const ws = new WebSocket(
  'ws://localhost:8082/streams/overview',
)

let state = []

ws.on('open', function open() {
  ws.send(JSON.stringify({profile: "wonder"}));
});

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  const action = JSON.parse(data);

  console.log(action.payload.map(acc => ({balance: acc.balance, pending: acc.transactions.length})))
})
