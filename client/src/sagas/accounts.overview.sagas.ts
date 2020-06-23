import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ApiEndpoints } from '../constants';
import { UserInterface } from '../interfaces/user.interface';
import { AccountsOverviewAction } from '../interfaces/account.interface';

const url = 'http://localhost:8080';

function* getAccountsSaga(action) {
  const { userId } = action;
  try {
    // yield will wait for Promise to resolve
    const response = yield fetch(url + ApiEndpoints.QUERY_ACCOUNTS,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
    // Again yield will wait for Promise to resolve
    const data: UserInterface = yield response.json();
    const actionSuccess: AccountsOverviewAction = {
      type: ActionTypes.QUERY_ACCOUNTS_SUCCESS,
      state: {
        loading: false,
        error: false,
        data: data.accounts,
      },
    };
    yield put(actionSuccess);
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


