import authService from '../services/auth.service';

export interface UserState {
  isLoggedIn: boolean,
  userId: string | undefined,
  userName: string | undefined
}

const logInAction = (newState: { userName: string, isLoggedIn: boolean }) => {
  return async dispatch => {
    const isUser = await authService.queryUser(newState.userName);

    // TODO: make better check?
    const user = isUser.find(u => u !== undefined);
    if (!!user) {
      await localStorage.setItem('userName', user.username);
      await localStorage.setItem('userId', user.id);
      dispatch({
        type: 'LOG_IN',
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
      type: 'LOG_OUT',
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
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, userName: action.data.userName, userId: action.data.userId };
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, userName: undefined, userId: undefined };
    default:
      return state;
  }
};

export default authReducer;
