import userService from '../../services/user.service';
import { getUser } from '../user.reducer';
import { User } from '../../sdk/graphql-zeus';

describe('async actions', () => {

  it('GET_USER', async () => {
    const mockUser: User = {
      id: '0x1',
      username: 'name',
      host: [{ id: 'host', title: 't', description: 'd' }],
      stars: [{ id: 'stars', title: 't', description: 'd' }],
      developer: [
        { id: 'id', name: 'name', project: { id: 'developer', title: 't', description: 'd' } }
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
