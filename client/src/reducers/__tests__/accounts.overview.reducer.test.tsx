import accountsOverviewReducer from '../accounts.overview.reducer';
import { AccountInterface } from '../../interfaces/account.interface';

const testInitState: AccountInterface[] = [];

describe('accountsOverviewReducer', () => {
  it('should return the initial state', () => {
    expect(accountsOverviewReducer(undefined, {})).toEqual(testInitState);
  });

  it('should handle INIT_ACCOUNT', () => {

    const stateOne: AccountInterface[] = [
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
    ];
    const stateTwo: AccountInterface[] = [
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
          {
            id: 'id',
            title: 'test',
          },
        ],
      },
    ];

    expect(
      accountsOverviewReducer(
        testInitState,
        {
          type: 'INIT_ACCOUNT',
          data: stateOne,
        }),
    ).toEqual(stateOne);

    expect(
      accountsOverviewReducer(
        stateOne,
        {
          type: 'INIT_ACCOUNT',
          data: stateTwo,
        },
      ),
    ).toEqual(stateTwo);
  });

  it('should handle ADD_ACCOUNT', () => {

    const stateOne: AccountInterface[] = [
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
    ];
    const newAccount = {
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
        {
          id: 'id',
          title: 'test',
        },
      ],
    };
    const stateTwo: AccountInterface[] = [...stateOne, newAccount];

    expect(
      accountsOverviewReducer(
        testInitState,
        {
          type: 'INIT_ACCOUNT',
          data: stateOne,
        }),
    ).toEqual(stateOne);

    expect(
      accountsOverviewReducer(
        stateOne,
        {
          type: 'ADD_ACCOUNT',
          data: newAccount,
        }),
    ).toEqual(stateTwo);

  });
});
