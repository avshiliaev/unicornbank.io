const WebSocket = require('ws')

const ws = new WebSocket(
  'ws://localhost:8082/streams/transactions?account=0c9a391f-b32b-416e-a665-13fa0d612df6',
)

let state = []

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', async function incoming (data) {
  let message = await JSON.parse(data)
  let payload = message.payload.transactions

  switch (message.type) {
    case 'init': {
      state = payload
      break
    }
    case 'update': {
      state = payload
      break
    }
  }

  const mockComponent = (state) => {
    return state.length > 0 ? {
      transactions: state.length,
      balance: state.map(tr => tr.amount).reduce(
        (a, b) => a + b,
      ),
    } : 'Nothing here yet...'
  }
  console.log(mockComponent(state))
})
