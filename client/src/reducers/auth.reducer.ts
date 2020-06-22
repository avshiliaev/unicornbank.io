import authService from '../services/auth.service';
import Constants from './constants';
import { UserStateInterface } from '../interfaces/user.interface';

/*
  return async dispatch => {
    const isUser = await authService.queryUser(newState.userName);
    if (!!isUser) {
      await localStorage.setItem('userName', isUser.username);
      await localStorage.setItem('userId', isUser.id);
      const isLoggedIn = true
      const userName = localStorage.getItem('userName')
      const userId = localStorage.getItem('userId')

      dispatch({
        type: Constants.LOG_IN,
        data: {
          isLoggedIn,
          userName,
          userId,
        },
      });
    }
  };

    return async dispatch => {
    localStorage.removeItem('userName');
    dispatch({
      type: Constants.LOG_OUT,
      data: {
        isLoggedIn: false,
        userName: undefined,
        userId: undefined,
      },
    });
  };

 */


const logInAction = (newState: UserStateInterface) => {
  const {isLoggedIn, userName, userId} = newState;
  return {
    type: Constants.LOG_IN,
    data: {
      isLoggedIn,
      userName,
      userId,
    },
  }
};

const logOutAction = (newState: UserStateInterface) => {
  const {isLoggedIn, userName, userId} = newState;
  return {
    type: Constants.LOG_OUT,
    data: {
      isLoggedIn,
      userName,
      userId,
    },
  }
};

export { logInAction, logOutAction };

const userInitialState: UserStateInterface = !!localStorage.getItem('userName')
  ? { userName: localStorage.getItem('userName'), isLoggedIn: true, userId: localStorage.getItem('userId') }
  : { isLoggedIn: false, userName: undefined, userId: undefined };

const authReducer = (state: UserStateInterface = userInitialState, action): UserStateInterface => {
  switch (action.type) {
    case Constants.LOG_IN:
      return { ...state, isLoggedIn: true, userName: action.data.userName, userId: action.data.userId };
    case Constants.LOG_OUT:
      return { ...state, isLoggedIn: false, userName: undefined, userId: undefined };
    default:
      return state;
  }
};

export default authReducer;
