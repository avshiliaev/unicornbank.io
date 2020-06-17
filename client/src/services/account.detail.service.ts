import { AccountInterface } from '../interfaces/account.interface';

const url = 'http://localhost:8080/accounts';

const queryAccount = async (accountId: string): Promise<AccountInterface> => {

  const data: AccountInterface[] = [
    {
      id: '4rvdbt4',
      title: 'DE4354 5465 4556 5423',
      description: 'This is my primary account',
      transactions: [
        {
          id: 'age43gbtd',
          title: '-54.03',
        },
        {
          id: 'zndfbt56hn',
          title: '-435.99',
        },
      ],
    },
    {
      id: '4tggbefrtid',
      title: 'DE5247 8796 5231 1114',
      description: 'Savings',
      transactions: [
        {
          id: '546jtzht6h',
          title: '+58.00',
        },
        {
          id: '3243546htznrbtrevf4',
          title: '+654.00',
        },
        {
          id: '43545t35t',
          title: '+10.00',
        },
      ],
    },
    {
      id: '65u7ukzmtz',
      title: 'DE8204 5674 4789 1568',
      description: 'Deposit',
      transactions: [
        {
          id: '45tz465jutn',
          title: '+1000.00',
        },
      ],
    },
  ];

  const payload: AccountInterface = data.find(acc => acc.id == accountId)

  return Promise.resolve(payload);
};

const accountService = {
  queryAccount,
};
export default accountService;
