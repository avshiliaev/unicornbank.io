import { call, put, take, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ActionTypes } from '../constants';
import createWebSocketConnection from '../web.socket';
import { NotificationInterface, NotificationsAction } from '../interfaces/notification.interface';

interface StreamResponse {
  type: string,
  payload: NotificationInterface[]
}

function createSocketChannel(socket) {

  return eventChannel(emit => {

    const openHandler = () => {
      console.log('connected');
    };
    const messageHandler = (event) => {
      const action: StreamResponse = JSON.parse(event.data);
      // TODO handle on backend!
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

function* getNotificationsSaga(action) {

  const { params } = action;
  const path = `/notifications?profile=${params}`;

  const socket = yield call(createWebSocketConnection, path);
  const socketChannel = yield call(createSocketChannel, socket);

  try {
    while (true) {
      const action: StreamResponse = yield take(socketChannel);
      const data = action.payload;
      const type = action.type === 'init'
        ? ActionTypes.QUERY_NOTIFICATIONS_INIT
        : ActionTypes.QUERY_NOTIFICATIONS_UPDATE;
      const actionSuccess: NotificationsAction = {
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
    const actionError: NotificationsAction = {
      type: ActionTypes.QUERY_NOTIFICATIONS_ERROR,
      state: {
        loading: false,
        error: true,
        data: [],
      },
    };
    yield put(actionError);
  }
}

export function* getNotificationsWatcher() {
  yield takeLatest(ActionTypes.QUERY_NOTIFICATIONS, getNotificationsSaga);
}


