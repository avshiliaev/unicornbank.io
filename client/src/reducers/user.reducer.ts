import { UserInterface } from '../interfaces/user.interface';
import Constants from './constants';

// const theUser = await userService.getUser(userId);

const getUser = (user: UserInterface) => {
  return {
    type: Constants.GET_USER,
    data: user,
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
