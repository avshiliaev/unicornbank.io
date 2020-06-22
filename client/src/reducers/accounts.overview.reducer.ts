import { AccountInterface } from '../interfaces/account.interface';
import Constants from './constants';

const initAccounts = (userId: string) => {
  return {
    type: Constants.INIT_ACCOUNTS,
    userId,
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
  addAccountAsHost,
};

const accountsOverviewInitialState: AccountInterface[] = [];

const accountsOverviewReducer = (
  state: AccountInterface[] = accountsOverviewInitialState,
  action,
): AccountInterface[] => {
  switch (action.type) {
    case Constants.INIT_ACCOUNTS:
      return state;
    case Constants.INIT_ACCOUNTS_SUCCESS:
      return action.data;
    case Constants.ADD_ACCOUNT:
      return [...state, action.data];
    default:
      return state;
  }
};

export default accountsOverviewReducer;
