const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8082/streams/profiles')

const msg = {
  profile: 'wonder',
  detail: true,
}
let state = []

ws.on('open', function open () {
  console.log('connected')
  ws.send(
    JSON.stringify(msg),
  )
})

ws.on('close', function close () {
  console.log('disconnected')
})

ws.on('message', function incoming (data) {
  let message = JSON.parse(data)
  let doc = message.fullDocument
  switch (message.operationType) {
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
    transactionsCount: state.reduce((a, b) => ({
      transactionsCount: a.transactionsCount + b.transactionsCount,
    })).transactionsCount,
  }
  console.log(MockComponent)
})
