import { Chain, User } from '../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const getStars = (userId: string) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        getUser: [
          { id: userId },
          {
            id: true,
            stars: [{}, { id: true }],
          },
        ],
      },
    );
    console.log(payload)
    dispatch({
      type: 'GET_STARS',
      data: payload.getUser.stars,
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
                stars: [{}, { id: true }],
              },
            ],
          },
        ],
      },
    );
    dispatch({
      type: 'TOGGLE_STARS',
      data: payload.updateUser.user[0].stars,
    });
  };
};

export { getStars, toggleStar };

const starsReducer = (state: any[] = [], action): any[] => {
  switch (action.type) {
    case 'GET_STARS':
      return [ ...action.data ];
    case 'TOGGLE_STARS':
      return [ ...action.data ];
    default:
      return [ ...state ];
  }
};

export default starsReducer;
