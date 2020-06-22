import { AccountInterface } from '../interfaces/account.interface';
import Constants from './constants';

const initAccountsOverview = (accounts: AccountInterface[]) => {
  return {
    type: Constants.INIT_ACCOUNTS,
    data: accounts,
  };
};

const addAccountAsHost = (account: AccountInterface) => {
  return {
    type: Constants.ADD_ACCOUNT,
    data: account,
  };
};

export { initAccountsOverview, addAccountAsHost };

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
