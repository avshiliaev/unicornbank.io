import { Chain } from '../../sdk/graphql-zeus';

const chain = Chain('http://localhost:8080/graphql');

const initProjectsDev = (userId: string) => {
  return async dispatch => {
    const payload = await chain.query(
      {
        getUser: [
          { id: userId },
          {
            host: [
              {},
              {
                id: true,
                title: true,
                description: true,
                tasks: [{}, { id: true }],
                developers: [{}, { id: true }],
                tags: [{}, { id: true }],
              },
            ],
            developer: [
              {},
              {
                project: [
                  {},
                  {
                    id: true,
                    title: true,
                    description: true,
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
    const theUser = payload.getUser;
    const asDeveloper = theUser.developer.map(dev => dev.project);
    const asHost = theUser.host;

    const data = {
      asDeveloper,
      asHost,
    };
    dispatch({
      type: 'INIT_PROJECTS_DEV',
      data,
    });
  };
};

export { initProjectsDev };
