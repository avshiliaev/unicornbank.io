import { call, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ActionTypes } from '../constants';
import { AccountsOverviewAction } from '../interfaces/account.interface';
import createWebSocketConnection from '../web.socket';

// this function creates an event channel from a given socket
// Setup subscription to incoming `ping` events
function createSocketChannel(socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {

    const messageHandler = (event) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      const action = JSON.parse(event.data);
      // TODO handle on backend!
      if (action.payload === null) {
        action.payload = []
      }
      emit(action);
    };
    const errorHandler = (errorEvent) => {
      // create an Error object and put it into the channel
      emit(new Error(errorEvent.reason));
    };

    socket.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };
    socket.onmessage = messageHandler;
    socket.onerror = errorHandler;
    socket.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
    };

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    return () => {
      socket.off('message', messageHandler);
    };
  });
}

function* getAccountsSaga(action) {
  const { userId } = action;

  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  try {
    while (true) {
    const action = yield take(socketChannel);
    const actionSuccess: AccountsOverviewAction = action.type === 'init'
      ? {
        type: ActionTypes.QUERY_ACCOUNTS_INIT,
        state: {
          loading: false,
          error: false,
          data: action.payload,
        },
      } : {
        type: ActionTypes.QUERY_ACCOUNTS_UPDATE,
        state: {
          loading: false,
          error: false,
          data: [action.payload],
        },
      };
    yield put(actionSuccess);
    }
  } catch (error) {
    const actionError: AccountsOverviewAction = {
      type: ActionTypes.QUERY_ACCOUNTS_ERROR,
      state: {
        loading: false,
        error: true,
        data: [],
      },
    };
    yield put(actionError);
  }
}

export function* getAccountsWatcher() {
  yield takeLatest(ActionTypes.QUERY_ACCOUNTS, getAccountsSaga);
}


