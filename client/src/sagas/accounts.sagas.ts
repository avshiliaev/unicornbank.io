import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

function* fetchAccounts() {

}

function* fetchAccountsSuccess() {

}

export default function* rootSaga() {
  yield all([
    fetchAccounts(),
  ])
}
