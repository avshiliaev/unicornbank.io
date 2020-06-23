import { AccountInterface, AccountsOverviewAction, AccountsOverviewReducerState } from '../interfaces/account.interface';
import Constants from './constants';
import { act } from 'react-dom/test-utils';

const initAccounts = (userId: string): AccountsOverviewAction => {
  return {
    type: Constants.INIT_ACCOUNTS,
    params: userId,
    state: {
      loading: true,
      error: false,
      data: []
    }
  };
};

const addAccountAsHost = (account: AccountInterface): AccountsOverviewAction => {
  return {
    type: Constants.ADD_ACCOUNT,
    state: {
      loading: true,
      error: false,
      data: [account]
    }
  };
};

export {
  initAccounts,
  addAccountAsHost,
};

const accountsOverviewInitialState: AccountsOverviewReducerState = {
  loading: false,
  error: false,
  data: []
}

const accountsOverviewReducer = (
  state: AccountsOverviewReducerState = accountsOverviewInitialState,
  action: AccountsOverviewAction,
): AccountsOverviewReducerState => {
  switch (action.type) {
    case Constants.INIT_ACCOUNTS:
      return { ...state };
    case Constants.INIT_ACCOUNTS_SUCCESS:
      // TODO the array gets overwritten!
      return { ...state, ...action.state };
    case Constants.ADD_ACCOUNT:
      return {...state, data: [...state.data, ...action.state.data]}
    default:
      return state;
  }
};

export default accountsOverviewReducer;
