import { Chain } from '../sdk/graphql-zeus';

const url = 'http://localhost:8080/graphql';

const queryUser = async (userName: string) => {

  const chain = Chain(url);
  const payload = await chain.query(
    {
      queryUser: [
        { filter: { username: { eq: userName } } },
        { id: true, username: true },
      ],
    },
  );
  return payload.queryUser;
};

const authService = {
  queryUser,
};
export default authService;
