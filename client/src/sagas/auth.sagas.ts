import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ApiEndpoints } from '../constants';
import { AuthAction, AuthInterface } from '../interfaces/auth.interface';

const host = 'http://localhost:8080'

function* logInSaga(action: AuthAction) {
  const { username } = action.params;
  const url = host + ApiEndpoints.LOG_IN.path()
  try {
    // yield will wait for Promise to resolve
    const response = yield fetch(
      url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      },
    );
    // Again yield will wait for Promise to resolve
    const data: AuthInterface = yield response.json();
    yield localStorage.setItem('username', data.username);
    yield localStorage.setItem('userId', data.userId);
    const actionSuccess: AuthAction = {
      type: ActionTypes.LOG_IN_SUCCESS,
      state: {
        loading: false,
        error: false,
        ...data,
      },
    };
    yield put(actionSuccess);
  } catch (error) {
    const actionError: AuthAction = {
      type: ActionTypes.LOG_IN_ERROR,
      state: {
        loading: false,
        error: true,
        isLoggedIn: false,
      },
    };
    yield put(actionError);
  }
}

export function* logInWatcher() {
  yield takeLatest(ActionTypes.LOG_IN, logInSaga);
}


