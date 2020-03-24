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

const logOutAction = () => {
  return async dispatch => {
    // const newTask = await tasksService.createNew(content);
    dispatch({
      type: 'LOG_OUT'
    })
  }
};

export {logInAction, logOutAction};
