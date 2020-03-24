export interface UserState {
  isLoggedIn: boolean,
  userName?: string
}

const userReducer = (state: UserState = {isLoggedIn: false}, action): UserState => {
  switch (action.type) {
    case 'LOG_IN':
      return {isLoggedIn: true, userName: action.data.userName};
    case 'LOG_OUT':
      return {isLoggedIn: false};
    default:
      return state
  }
};

export default userReducer;
