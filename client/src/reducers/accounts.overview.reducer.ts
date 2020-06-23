import { AccountInterface, AccountsOverviewAction, AccountsOverviewReducerState } from '../interfaces/account.interface';
import { ActionTypes } from '../constants';

const initAccounts = (userId: string): AccountsOverviewAction => {
  return {
    type: ActionTypes.QUERY_ACCOUNTS,
    params: userId,
    state: {
      loading: true,
      error: false,
      data: [],
    },
  };
};

const addAccountAsHost = (account: AccountInterface): AccountsOverviewAction => {
  return {
    type: ActionTypes.ADD_ACCOUNT,
    state: {
      loading: true,
      error: false,
      data: [account],
    },
  };
};

export {
  initAccounts,
  addAccountAsHost,
};

const accountsOverviewInitialState: AccountsOverviewReducerState = {
  loading: false,
  error: false,
  data: [],
};

const accountsOverviewReducer = (
  state: AccountsOverviewReducerState = accountsOverviewInitialState,
  action: AccountsOverviewAction,
): AccountsOverviewReducerState => {
  switch (action.type) {
    case ActionTypes.QUERY_ACCOUNTS:
      return { ...state };
    case ActionTypes.QUERY_ACCOUNTS_SUCCESS:
      // TODO the array gets overwritten!
      return { ...state, ...action.state };
    case ActionTypes.QUERY_ACCOUNTS_ERROR:
      return { ...state };
    case ActionTypes.ADD_ACCOUNT:
      return { ...state, data: [...state.data, ...action.state.data] };
    default:
      return state;
  }
};

export default accountsOverviewReducer;
