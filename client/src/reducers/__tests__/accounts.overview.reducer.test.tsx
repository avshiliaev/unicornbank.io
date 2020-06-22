import accountsOverviewReducer from '../accounts.overview.reducer';
import { AccountInterface } from '../../interfaces/account.interface';
import Constants from '../constants';

const testInitState: AccountInterface[] = [];

describe('accountsOverviewReducer', () => {
  it('should return the initial state', () => {
    expect(accountsOverviewReducer(undefined, {})).toEqual(testInitState);
  });

  it('should handle INIT_ACCOUNT', () => {

    const stateOne: AccountInterface[] = [
      { uuid: '0x1', title: 't', balance: 0, status: 'approved' },
    ];
    const stateTwo: AccountInterface[] = [
      { uuid: '1', title: 't', balance: 0, status: 'approved' },
      { uuid: '2', title: 't', balance: 0, status: 'approved' },
    ];

    expect(
      accountsOverviewReducer(
        testInitState,
        {
          type: Constants.INIT_ACCOUNT,
          data: stateOne,
        }),
    ).toEqual(stateOne);

    expect(
      accountsOverviewReducer(
        stateOne,
        {
          type: Constants.INIT_ACCOUNT,
          data: stateTwo,
        },
      ),
    ).toEqual(stateTwo);
  });

  it('should handle ADD_ACCOUNT', () => {

    const stateOne: AccountInterface[] = [
      { uuid: '0x1', title: 't', balance: 0, status: 'approved' },
    ];
    const newAccount = { uuid: '2', title: 't', balance: 0, status: 'approved' };
    const stateTwo: AccountInterface[] = [...stateOne, newAccount];

    expect(
      accountsOverviewReducer(
        testInitState,
        {
          type: Constants.INIT_ACCOUNT,
          data: stateOne,
        }),
    ).toEqual(stateOne);

    expect(
      accountsOverviewReducer(
        stateOne,
        {
          type: Constants.ADD_ACCOUNT,
          data: newAccount,
        }),
    ).toEqual(stateTwo);

  });
});
