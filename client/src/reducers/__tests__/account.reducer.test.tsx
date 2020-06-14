import accountReducer from '../account.reducer';
import { AccountInterface } from '../../interfaces/account.interface';

describe('accountReducer', () => {
  it('should return the initial state', () => {
    expect(accountReducer(undefined, {})).toEqual({});
  });

  it('should handle GET_ACCOUNT', () => {
    const accountOne: AccountInterface = { id: '1', title: '1', description: "test" };
    const accountTwo: AccountInterface = { id: '2', title: '2', description: "test" };

    expect(
      accountReducer(
        {},
        {
          type: 'GET_ACCOUNT',
          data: accountOne,
        }),
    ).toEqual(accountOne);

    expect(
      accountReducer(
        accountOne,
        {
          type: 'GET_ACCOUNT',
          data: accountTwo,
        },
      ),
    ).toEqual(accountTwo);
  });
});
