import accountOverviewService from '../../services/accounts.overview.service';
import { addAccountAsHost, initAccountsOverview } from '../accounts.overview.reducer';
import { AccountInterface } from '../../interfaces/account.interface';

describe('async actions', () => {

  it('INIT_ACCOUNTS', async () => {
    const mockPayload: AccountInterface[] = [
      {
        id: 'id',
        title: 'test',
        description: 'test',
        transactions: [
          {
            id: 'id',
            title: 'test',
          },
        ],
      },
    ];
    const desiredData: AccountInterface[] = [
      {
        id: 'id',
        title: 'test',
        description: 'test',
        transactions: [
          {
            id: 'id',
            title: 'test',
          },
        ],
      },
    ];

    accountOverviewService.queryAccounts = jest.fn().mockReturnValue(mockPayload);

    const dispatch = jest.fn();
    await initAccountsOverview('0x1')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'INIT_ACCOUNTS',
      data: desiredData,
    });
  });

  it('ADD_ACCOUNT', async () => {
    const addAccountInput: AccountInterface = { title: 'title', description: 'description' };

    accountOverviewService.addAccount = jest.fn().mockReturnValue([addAccountInput]);

    const dispatch = jest.fn();
    await addAccountAsHost(addAccountInput)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'ADD_ACCOUNT',
      data: [addAccountInput],
    });
  });
});
