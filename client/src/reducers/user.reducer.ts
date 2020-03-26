export interface UserState {
  isLoggedIn: boolean,
  userId: string | undefined,
  userName: string | undefined
}

const userInitialState: UserState = !!localStorage.getItem('userName')
  ? { userName: localStorage.getItem('userName'), isLoggedIn: true, userId: localStorage.getItem('userId') }
  : { isLoggedIn: false, userName: undefined, userId: undefined };

const userReducer = (state: UserState = userInitialState, action): UserState => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, userName: action.data.userName, userId: action.data.userId };
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false, userName: undefined, userId: undefined };
    default:
      return state;
  }
};

export default userReducer;
