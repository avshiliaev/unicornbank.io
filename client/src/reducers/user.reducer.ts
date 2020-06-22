import userService from '../services/user.service';
import { UserInterface } from '../interfaces/user.interface';
import Constants from './constants';

const getUser = (userId: string) => {
  return async dispatch => {
    const theUser = await userService.getUser(userId);
    dispatch({
      type: Constants.GET_USER,
      data: theUser,
    });
  };
};

export { getUser };

const userReducer = (state: UserInterface | Object, action): UserInterface | Object => {
  switch (action.type) {
    case Constants.GET_USER:
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default userReducer;
