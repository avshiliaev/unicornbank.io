import { all } from 'redux-saga/effects';
import { getAccountsWatcher } from './accounts.overview.sagas';
import { getAccountDetailWatcher } from './account.detail.sagas';

export default function* rootSaga() {
  yield all([
    getAccountsWatcher(),
    getAccountDetailWatcher()
  ]);
}
