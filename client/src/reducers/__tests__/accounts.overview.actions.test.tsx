import accountOverviewService from '../../services/accounts.overview.service';
import { addAccountAsHost, initAccountsOverview } from '../accounts.overview.reducer';
import { AccountInterface } from '../../interfaces/account.interface';
import Constants from '../constants';

describe('async actions', () => {

  it(Constants.INIT_ACCOUNT, async () => {
    const mockPayload: AccountInterface[] = [
      { uuid: '0x1', title: 't', balance: 0, status: 'approved' }
    ];
    const desiredData: AccountInterface[] = [
      { uuid: '0x1', title: 't', balance: 0, status: 'approved' }
    ];

    accountOverviewService.queryAccounts = jest.fn().mockReturnValue(mockPayload);

    const dispatch = jest.fn();
    await initAccountsOverview('0x1')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: Constants.INIT_ACCOUNT,
      data: desiredData,
    });
  });

  it(Constants.ADD_ACCOUNT, async () => {
    const addAccountInput: AccountInterface = { uuid: '0x1', title: 't', balance: 0, status: 'approved' };

    accountOverviewService.addAccount = jest.fn().mockReturnValue([addAccountInput]);

    const dispatch = jest.fn();
    await addAccountAsHost(addAccountInput)(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: Constants.ADD_ACCOUNT,
      data: [addAccountInput],
    });
  });
});
