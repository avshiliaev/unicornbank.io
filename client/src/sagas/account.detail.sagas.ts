import { call, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ActionTypes } from '../constants';
import { AccountAction, AccountInterface } from '../interfaces/account.interface';
import createWebSocketConnection from '../web.socket';

interface StreamResponse {
  type: string,
  payload: AccountInterface[]
}

function createSocketChannel(socket) {

  return eventChannel(emit => {

    const openHandler = () => {
      console.log('connected');
    };
    const messageHandler = (event) => {
      const action: StreamResponse = JSON.parse(event.data);
      if (action.payload === null || action.payload === undefined) {
        action.payload = [];
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

function* getAccountDetailSaga(action) {

  const { params } = action;
  const path = `/profiles?account=${params}`;

  const socket = yield call(createWebSocketConnection, path);
  const socketChannel = yield call(createSocketChannel, socket);

  try {
    while (true) {
      const action: StreamResponse = yield take(socketChannel);
      const data = action.payload;
      const type = action.type === 'init'
        ? ActionTypes.GET_ACCOUNT_DETAIL_SUCCESS
        : ActionTypes.GET_ACCOUNT_DETAIL_SUCCESS;
      const actionSuccess: AccountAction = {
        type,
        state: {
          loading: false,
          error: false,
          data: data[0],
        },
      };
      yield put(actionSuccess);
    }
  } catch (error) {
    const actionError: AccountAction = {
      type: ActionTypes.GET_ACCOUNT_DETAIL_ERROR,
      state: {
        loading: false,
        error: true,
      },
    };
    yield put(actionError);
  }
}

export function* getAccountDetailWatcher() {
  yield takeLatest(ActionTypes.GET_ACCOUNT_DETAIL, getAccountDetailSaga);
}


