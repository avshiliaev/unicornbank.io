import accountService from '../services/account.detail.service';
import { AccountInterface } from '../interfaces/account.interface';
import Constants from './constants';

const getAccount = (accountId: string) => {
  return async dispatch => {
    const account = await accountService.queryAccount(accountId);
    dispatch({
      type: Constants.GET_ACCOUNT,
      data: account,
    });
  };
};

export { getAccount };

const accountReducer = (
  state: AccountInterface | Object,
  action,
): AccountInterface | Object => {
  switch (action.type) {
    case Constants.GET_ACCOUNT:
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default accountReducer;
