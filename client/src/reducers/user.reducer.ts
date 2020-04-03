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
            location: true,
            stars: [{}, { id: true }],
            host: [{}, { id: true }],
            developer: [{}, { id: true, project: [{}, { id: true }] }],
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

const toggleStar = (userId: string, setStars: [{ id: string }]) => {
  return async dispatch => {
    const payload = await chain.mutation(
      {
        updateUser: [
          { input: { filter: { id: [userId] }, set: { stars: setStars } } },
          {
            user: [
              {},
              {
                id: true,
                username: true,
                location: true,
                stars: [{}, { id: true }],
                host: [{}, { id: true }],
                developer: [{}, { id: true, project: [{}, { id: true }] }],
              },
            ],
          },
        ],
      },
    );
    dispatch({
      type: 'TOGGLE_STAR',
      data: payload.updateUser,
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
