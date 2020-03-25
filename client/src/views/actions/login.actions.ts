import { UserState } from '../../reducers/user.reducer';
import { Chain } from '../../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const logInAction = (newState: UserState) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        queryUser: [
          { filter: { username: { eq: newState.userName } } },
          { id: true, username: true },
        ],
      },
    );
    // TODO: make better check!
    if (!!payload.queryUser.length) {
      await localStorage.setItem('userName', payload.queryUser[0].username);
      dispatch({
        type: 'LOG_IN',
        data: {
          isLoggedIn: true,
          userName: localStorage.getItem('userName'),
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
        userName: '',
      },
    });
  };
};

export { logInAction, logOutAction };
