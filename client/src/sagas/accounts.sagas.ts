import { all, put, takeLatest } from 'redux-saga/effects';
import Constants from '../reducers/constants';
import { UserInterface } from '../interfaces/user.interface';

export function* getAccountsSaga(action) {
  const { userId } = action;
  try {
    // yield will wait for Promise to resolve
    const response = yield fetch('http://localhost:8080/queries/getUserState', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
    // Again yield will wait for Promise to resolve
    const data: UserInterface = yield response.json();
    console.log(data);
    yield put({ type: Constants.INIT_ACCOUNTS_SUCCESS, data: data.accounts });
  } catch (error) {
    yield put({ type: Constants.INIT_ACCOUNTS_ERROR, error });
  }
}

function* actionWatcher() {
  yield takeLatest(Constants.INIT_ACCOUNTS, getAccountsSaga);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
