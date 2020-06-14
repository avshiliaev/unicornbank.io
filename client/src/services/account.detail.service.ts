import { AccountInterface } from '../interfaces/account.interface';

const url = 'http://localhost:8080/accounts';

const queryAccount = async (accountId: string): Promise<AccountInterface> => {

  const payload: AccountInterface = {
    id: accountId,
    title: 'test',
    description: 'test',
    transactions: [
      {
        id: 'id',
        title: 'test',
      },
    ],
  };

  return Promise.resolve(payload);
};

const accountService = {
  queryAccount,
};
export default accountService;
