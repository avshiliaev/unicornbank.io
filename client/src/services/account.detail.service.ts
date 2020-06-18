import { AccountInterface } from '../interfaces/account.interface';

const url = 'http://localhost:8080/accounts';

const queryAccount = async (accountId: string): Promise<AccountInterface> => {

  const data: AccountInterface[] = [
    {
      uuid: '4rvdbt4',
      title: 'DE4354 5465 4556 5423',
      status: 'This is my primary account',
      balance: 1213,
      transactions: [
        {
          uuid: 'age43gbtd',
          account: "4rvdbt4",
          status: "processed",
          amount: 12.0,
        },
        {
          uuid: 'cwewcwec',
          account: "4rvdbt4",
          status: "processed",
          amount: 98.1,
        },
      ],
    },
    {
      uuid: 'wqecvrsc',
      title: 'DE4354 5465 4556 5423',
      status: 'This is my primary account',
      balance: 1213,
      transactions: [
        {
          uuid: 'wcdewdcerefwec',
          account: "wqecvrsc",
          status: "processed",
          amount: 32.9,
        },
        {
          uuid: '34vrcexwcervc',
          account: "wqecvrsc",
          status: "processed",
          amount: 55.43,
        },
      ],
    },
  ];

  const payload: AccountInterface = data.find(acc => acc.uuid == accountId)

  return Promise.resolve(payload);
};

const accountService = {
  queryAccount,
};
export default accountService;
