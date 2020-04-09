import { Chain } from '../sdk/graphql-zeus';

const url = 'http://localhost:8080/graphql';

const getUser = async (userId: string) => {

  const chain = Chain(url);
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

  return payload.getUser;
};

const userService = {
  getUser,
};
export default userService;
