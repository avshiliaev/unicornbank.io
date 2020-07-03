import { call, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ActionTypes } from '../constants';
import { AccountsOverviewAction } from '../interfaces/account.interface';
import createWebSocketConnection from '../web.socket';

function createSocketChannel(socket) {

  return eventChannel(emit => {

    const openHandler = () => {
      console.log('connected');
    };
    const messageHandler = (event) => {
      const action = JSON.parse(event.data);
      // TODO handle on backend!
      if (action.payload === null) {
        action.payload = [];
      } else if (!Array.isArray(action.payload)) {
        action.payload = [action.payload];
      }
      emit(action);
    };
    const errorHandler = (errorEvent) => {
      emit(new Error(errorEvent.reason));
    };

    socket.onopen = openHandler;
    socket.onmessage = messageHandler;
    socket.onerror = errorHandler;

    return () => {
      socket.off('message', messageHandler);
    };
  });
}

function* getAccountsSaga(action) {

  const { params } = action;
  const path = `/overview?profile=${params}`;

  const socket = yield call(createWebSocketConnection, path);
  const socketChannel = yield call(createSocketChannel, socket);

  try {
    while (true) {
      const action = yield take(socketChannel);
      const data = action.payload;
      const type = action.type === 'init'
        ? ActionTypes.QUERY_ACCOUNTS_INIT
        : ActionTypes.QUERY_ACCOUNTS_UPDATE;
      const actionSuccess: AccountsOverviewAction = {
        type,
        state: {
          loading: false,
          error: false,
          data,
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

