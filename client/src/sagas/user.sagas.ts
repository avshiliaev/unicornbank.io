import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ApiEndpoints } from '../constants';
import { UserAction, UserInterface } from '../interfaces/user.interface';

const url = 'http://localhost:8080'

function* getUserSaga(action: UserAction) {
  const { userId } = action.params;
  try {
    // yield will wait for Promise to resolve
    const response = yield fetch(url + ApiEndpoints.GET_USER, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
    // Again yield will wait for Promise to resolve
    const data: UserInterface = yield response.json();
    const actionSuccess: UserAction = {
      type: ActionTypes.GET_USER_SUCCESS,
      state: {
        loading: false,
        error: false,
        data,
      }
    }
    yield put(actionSuccess);
  } catch (error) {
    const actionError: UserAction = {
      type: ActionTypes.GET_USER_ERROR,
      state: {
        loading: false,
        error: true,
      }
    }
    yield put(actionError);
  }
}

export function* getUserWatcher() {
  yield takeLatest(ActionTypes.GET_USER, getUserSaga);
}


