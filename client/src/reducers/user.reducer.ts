export interface UserState {
  isLoggedIn: boolean,
  userName?: string
}

const userReducer = (state: UserState, action): UserState => {
  switch (action.type) {
    case 'LOG_IN':
      return { isLoggedIn: true, userName: action.data.userName };
    case 'LOG_OUT':
      return { isLoggedIn: false };
    default:
      return localStorage.getItem('userName')
        ? { userName: localStorage.getItem('userName'), isLoggedIn: true }
        : { isLoggedIn: false };
  }
};

export default userReducer;
