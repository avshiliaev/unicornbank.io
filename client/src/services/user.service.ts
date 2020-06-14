import { UserInterface } from '../interfaces/user.interface';

const url = 'http://localhost:8080/graphql';

const getUser = async (userId: string): Promise<UserInterface> => {

  const payload: UserInterface = {
    id: userId,
    username: 'test',
  };

  return Promise.resolve(payload);
};

const userService = {
  getUser,
};
export default userService;
