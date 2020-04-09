import { User } from '../sdk/graphql-zeus';
import userService from '../services/user.service';

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

const userReducer = (state: User | Object, action): User | Object => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default userReducer;
