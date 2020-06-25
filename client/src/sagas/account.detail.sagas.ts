import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ApiEndpoints } from '../constants';
import { AccountAction, AccountInterface } from '../interfaces/account.interface';

const host = 'http://localhost:8080';

function* getAccountDetailSaga(action: AccountAction) {
  const { accountId } = action.params;

  const url = host + ApiEndpoints.GET_ACCOUNT_DETAIL.path();

  try {
    // yield will wait for Promise to resolve
    const response = yield fetch(url, {
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
      type: ActionTypes.GET_ACCOUNT_DETAIL_SUCCESS,
      state: {
        loading: false,
        error: false,
        data,
      },
    };
    yield put(actionSuccess);
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


