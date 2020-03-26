import { Chain } from '../../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const logInAction = (newState: { userName: string, isLoggedIn: boolean }) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        queryUser: [
          { filter: { username: { eq: newState.userName } } },
          { id: true, username: true },
        ],
      },
    );

    // TODO: make better check?
    const user = payload.queryUser.find(u => u !== undefined);
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
