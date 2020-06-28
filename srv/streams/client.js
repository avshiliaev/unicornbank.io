const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8082/streams/profiles')

const profile = "wonder"
let state = []

ws.on('open', function open () {
  console.log('connected')
  ws.send(profile)
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
    case 'update': {
      state = state.map(account => {
        if (account.uuid === doc.uuid) {
          return {...account, ...doc}
        }
        return account;
      });
      break
    }
  }
  console.log(
    state.reduce((a, b) => ({balance: a.balance + b.balance})).balance
  )
})
