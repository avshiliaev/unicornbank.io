import { AccountAction, AccountInterface, AccountReducerState } from '../interfaces/account.interface';
import Constants from './constants';

const getAccount = (accountId: string): AccountAction => {
  return {
    type: Constants.INIT_ACCOUNT_DETAIL,
    params: accountId,
    state: {
      loading: true,
      error: false,
    },
  };
};

export { getAccount };

const accountReducer = (
  state: AccountReducerState,
  action: AccountAction,
): AccountInterface | Object => {
  switch (action.type) {
    case Constants.INIT_ACCOUNT_DETAIL:
      return { ...state, ...action.state };
    case Constants.INIT_ACCOUNT_DETAIL_SUCCESS:
      return { ...state, ...action.state };
    case Constants.INIT_ACCOUNT_DETAIL_ERROR:
      return { ...state, ...action.state };
    default:
      return { ...state };
  }
};

export default accountReducer;
