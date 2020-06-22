import { AccountInterface } from '../interfaces/account.interface';
import Constants from './constants';

const getAccount = (account: AccountInterface) => {
  return {
    type: Constants.GET_ACCOUNT,
    data: account,
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
