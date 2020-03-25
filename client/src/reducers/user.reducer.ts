export interface UserState {
  isLoggedIn: boolean,
  userName: string | undefined
}

const userInitialState: UserState = localStorage.getItem('userName')
  ? { userName: localStorage.getItem('userName'), isLoggedIn: true }
  : { isLoggedIn: false, userName: undefined };

const userReducer = (state: UserState = userInitialState, action): UserState => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, userName: action.data.userName };
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, userName: undefined };
    default:
      return state;
  }
};

export default userReducer;
