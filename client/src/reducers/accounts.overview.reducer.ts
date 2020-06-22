import { AccountInterface } from '../interfaces/account.interface';
import Constants from './constants';

const initAccounts = (accounts: AccountInterface[]) => {
  return {
    type: Constants.INIT_ACCOUNTS,
    data: accounts,
  };
};

const initAccountsSuccess = (accounts: AccountInterface[]) => {
  return {
    type: Constants.INIT_ACCOUNTS_SUCCESS,
    data: accounts,
  };
};

const initAccountsError = (accounts: AccountInterface[]) => {
  return {
    type: Constants.INIT_ACCOUNTS_ERROR,
    data: accounts,
  };
};

const addAccountAsHost = (account: AccountInterface) => {
  return {
    type: Constants.ADD_ACCOUNT,
    data: account,
  };
};

export {
  initAccounts,
  initAccountsSuccess,
  initAccountsError,
  addAccountAsHost,
};

const accountsOverviewInitialState: AccountInterface[] = [];

const accountsOverviewReducer = (
  state: AccountInterface[] = accountsOverviewInitialState,
  action,
): AccountInterface[] => {
  switch (action.type) {
    case Constants.INIT_ACCOUNTS:
      return action.data;
    case Constants.ADD_ACCOUNT:
      return [...state, action.data];
    default:
      return state;
  }
};

export default accountsOverviewReducer;
