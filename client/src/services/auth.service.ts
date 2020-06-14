import { UserInterface } from '../interfaces/user.interface';

const url = 'http://localhost:8080/graphql';

const queryUser = async (userName: string): Promise<UserInterface> => {

  const payload: UserInterface = {
    id: 'test',
    username: userName,
  };

  return Promise.resolve(payload);
};

const authService = {
  queryUser,
};
export default authService;
