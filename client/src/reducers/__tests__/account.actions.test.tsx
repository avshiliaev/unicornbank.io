import { getAccount } from '../account.reducer';
import accountService from '../../services/account.detail.service';
import { AccountInterface } from '../../interfaces/account.interface';

describe('async actions', () => {

  it('GET_ACCOUNT', async () => {
    const account: AccountInterface = { id: '0x1', title: 't', description: 'd' };

    accountService.queryAccount = jest.fn().mockReturnValue(account);

    const dispatch = jest.fn();
    await getAccount('0x9')(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: 'GET_ACCOUNT',
      data: account,
    });
  });
});
