import authService from '../services/auth.service';
import Constants from './constants';

export interface UserState {
  isLoggedIn: boolean,
  userId: string | undefined,
  userName: string | undefined
}

const logInAction = (newState: { userName: string, isLoggedIn: boolean }) => {
  return async dispatch => {
    const isUser = await authService.queryUser(newState.userName);
    if (!!isUser) {
      await localStorage.setItem('userName', isUser.username);
      await localStorage.setItem('userId', isUser.id);
      dispatch({
        type: Constants.LOG_IN,
        data: {
          isLoggedIn: true,
          userName: localStorage.getItem('userName'),
          userId: localStorage.getItem('userId'),
        },
      });
    }
  };
};

const logOutAction = () => {
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
};

export { logInAction, logOutAction };

const userInitialState: UserState = !!localStorage.getItem('userName')
  ? { userName: localStorage.getItem('userName'), isLoggedIn: true, userId: localStorage.getItem('userId') }
  : { isLoggedIn: false, userName: undefined, userId: undefined };

const authReducer = (state: UserState = userInitialState, action): UserState => {
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
