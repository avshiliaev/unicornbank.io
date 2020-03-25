import { Chain } from '../../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const initProjectsDev = (userName) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        queryUser: [
          { filter: { username: { eq: userName } } },
          {
            id: true,
            host: [
              {},
              { title: true },
            ],
            developer: [
              {},
              {
                project: [
                  {},
                  {
                    id: true,
                    title: true,
                    tasks: [{}, { id: true }],
                    developers: [{}, { id: true }],
                    tags: [{}, { id: true }],
                  },
                ],
              },
            ],
          },
        ],
      },
    );
    const theUser = payload.queryUser[0];
    const asDeveloper = theUser.developer.map(dev => dev.project);
    dispatch({
      type: 'INIT_PROJECTS_DEV',
      data: asDeveloper,
    });
  };
};

export { initProjectsDev };
