import { AccountInterface } from '../interfaces/account.interface';

const url = 'http://localhost:8080/graphql';

const queryAccounts = async (userId: string): Promise<AccountInterface[]> => {

  const payload: AccountInterface[] = [
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

  return Promise.resolve(payload);
};

const addAccount = async (addAccountInput: AccountInterface): Promise<AccountInterface> => {

  const payload: AccountInterface = addAccountInput;

  return Promise.resolve(payload);
};

const accountOverviewService = {
  queryAccounts,
  addAccount,
};
export default accountOverviewService;
