import { Chain, User } from '../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const getUser = (userId: string) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        getUser: [
          { id: userId },
          {
            id: true,
            username: true,
          },
        ],
      },
    );
    dispatch({
      type: 'GET_USER',
      data: payload.getUser,
    });
  };
};

export { getUser };

const userReducer = (state: User | Object, action): User | Object => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default userReducer;
