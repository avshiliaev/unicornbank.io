import { UserState } from '../../reducers/user.reducer';

const logInAction = (newState: UserState) => {
  return async dispatch => {
    await localStorage.setItem('userName', newState.userName);
    dispatch({
      type: 'LOG_IN',
      data: {
        isLoggedIn: true,
        userName: localStorage.getItem('userName'),
      },
    });
  };
};

const logOutAction = () => {
  return async dispatch => {
    localStorage.removeItem('userName');
    dispatch({
      type: 'LOG_OUT',
    });
  };
};

export { logInAction, logOutAction };
