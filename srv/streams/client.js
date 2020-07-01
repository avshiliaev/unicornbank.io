const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8082/streams/accounts?profile=wonder')

let state = []

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  let message = JSON.parse(data)
  let doc = message.payload
  // console.log(message)
  switch (message.type) {
    case 'init': {
      state = [...doc]
      break
    }
    case 'insert': {
      state = [...state, doc]
      break
    }
    case 'update': {
      state = state.map(account => {
        if (account.uuid === doc.uuid) {
          return { ...account, ...doc }
        }
        return account
      })
      break
    }
  }

  let MockComponent = {
    balance: state.reduce(
      (a, b) => ({ balance: a.balance + b.balance })).balance,
    trCount: state.reduce(
      (a, b) => ({
        trCount: a.transactions.length + b.transactions.length,
      })).trCount,

  }
  console.log(MockComponent)
})
