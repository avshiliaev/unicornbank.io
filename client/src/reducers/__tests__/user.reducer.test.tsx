import userReducer from '../user.reducer';
import Constants from '../constants';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({});
  });

  it('should handle GET_USER', () => {
    const userOne = { id: '1', username: '1' };
    const userTwo = { id: '2', username: '2' };

    expect(
      userReducer(
        {},
        {
          type: Constants.GET_USER,
          data: userOne,
        }),
    ).toEqual(userOne);

    expect(
      userReducer(
        userOne,
        {
          type: Constants.GET_USER,
          data: userTwo,
        },
      ),
    ).toEqual(userTwo);
  });
});
