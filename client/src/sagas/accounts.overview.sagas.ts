import { all, put, takeLatest } from 'redux-saga/effects';
import Constants from '../reducers/constants';
import { UserInterface } from '../interfaces/user.interface';
import { AccountAction, AccountsOverviewAction } from '../interfaces/account.interface';

function* getAccountsSaga(action) {
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
    const actionSuccess: AccountsOverviewAction = {
      type: Constants.INIT_ACCOUNTS_SUCCESS,
      state: {
        loading: false,
        error: false,
        data: data.accounts,
      }
    }
    yield put(actionSuccess);
  } catch (error) {
    const actionError: AccountsOverviewAction = {
      type: Constants.INIT_ACCOUNTS_ERROR,
      state: {
        loading: false,
        error: true,
        data: []
      }
    }
    yield put(actionError);
  }
}

export function* getAccountsWatcher() {
  yield takeLatest(Constants.INIT_ACCOUNTS, getAccountsSaga);
}


