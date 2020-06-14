import userService from '../../services/user.service';
import { getUser } from '../user.reducer';
import { UserInterface } from '../../interfaces/user.interface';

describe('async actions', () => {

  it('GET_USER', async () => {
    const mockUser: UserInterface = {
      id: '0x1',
      username: 'name',
      accounts: [
        {
          id: 'id',
          title: 'test',
          description: 'test',
          transactions: [
            {
              id: 'id',
              title: 'test',
            },
            {
              id: 'id',
              title: 'test',
            },
          ],
        },
      ],
    };

    userService.getUser = jest.fn().mockReturnValue(mockUser);

    const dispatch = jest.fn();
    await getUser('0x1')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'GET_USER',
      data: mockUser,
    });
  });
});
