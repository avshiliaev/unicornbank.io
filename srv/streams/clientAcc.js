const WebSocket = require('ws')

const ws = new WebSocket(
  'ws://localhost:8082/streams/accounts?profile=wonder',
)

let state = []

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  let message = JSON.parse(data)
  let payload = message.payload
  switch (message.type) {
    case 'init': {
      state = payload
      break
    }
    case 'update': {
      if (state.filter(a => a.uuid === payload.uuid).length > 0) {
        state = state.map(account => {
          if (account.uuid === payload.uuid) {
            return { ...account, ...payload }
          }
          return account
        })
      } else {
        state = [...state, payload]
      }
      break
    }
  }

  const mockComponent = (state) => {
    return state != null ? {
      accounts: state.length,
      balance: state.reduce(
        (a, b) => ({ balance: a.balance + b.balance })).balance,
    } : 'Nothing here yet...'
  }
  console.log(mockComponent(state))
})
