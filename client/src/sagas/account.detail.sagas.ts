import { put, takeLatest } from 'redux-saga/effects';
import Constants from '../reducers/constants';
import { AccountAction, AccountInterface } from '../interfaces/account.interface';

function* getAccountDetailSaga(action: AccountAction) {
  const { accountId } = action.params;
  try {
    // yield will wait for Promise to resolve
    const response = yield fetch('http://localhost:8080/queries/getAccountDetail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountId }),
    });
    // Again yield will wait for Promise to resolve
    const data: AccountInterface = yield response.json();
    const actionSuccess: AccountAction = {
      type: Constants.INIT_ACCOUNT_DETAIL_SUCCESS,
      state: {
        loading: false,
        error: false,
        data,
      }
    }
    yield put(actionSuccess);
  } catch (error) {
    const actionError: AccountAction = {
      type: Constants.INIT_ACCOUNT_DETAIL_ERROR,
      state: {
        loading: false,
        error: true,
      }
    }
    yield put(actionError);
  }
}

export function* getAccountDetailWatcher() {
  yield takeLatest(Constants.INIT_ACCOUNT_DETAIL, getAccountDetailSaga);
}


