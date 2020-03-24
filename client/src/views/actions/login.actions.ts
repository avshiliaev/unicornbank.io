import { UserState } from '../../reducers/user.reducer';

const logInAction = (state: UserState) => {
  return async dispatch => {
    // const newTask = await tasksService.createNew(content);
    dispatch({
      type: 'LOG_IN',
      data: {
        isLoggedIn: true,
        userName: state.userName
      }
    })
  }
};

const logOutAction = (state: UserState) => {
  return async dispatch => {
    // const newTask = await tasksService.createNew(content);
    dispatch({
      type: 'LOG_OUT',
      data: {
        isLoggedIn: false,
        userName: ''
      }
    })
  }
};

export {logInAction, logOutAction};
