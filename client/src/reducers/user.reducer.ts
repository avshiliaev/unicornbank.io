import userService from '../services/user.service';
import { UserInterface } from '../interfaces/user.interface';

const getUser = (userId: string) => {
  return async dispatch => {
    const theUser = await userService.getUser(userId);
    dispatch({
      type: 'GET_USER',
      data: theUser,
    });
  };
};

export { getUser };

const userReducer = (state: UserInterface | Object, action): UserInterface | Object => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default userReducer;
