import accountService from '../services/account.detail.service';
import { AccountInterface } from '../interfaces/account.interface';

const getAccount = (accountId: string) => {
  return async dispatch => {
    const account = await accountService.queryAccount(accountId);
    dispatch({
      type: 'GET_ACCOUNT',
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
    case 'GET_ACCOUNT':
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default accountReducer;
