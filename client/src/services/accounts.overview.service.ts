import { AccountInterface } from '../interfaces/account.interface';

export async function http<T>(
  request: RequestInit,
): Promise<T> {
  const url = 'http://localhost:8080/queries/getUserState';
  const response = await fetch(url, request);
  return await response.json();
}

interface UserStateI {
  userId: string;
  accounts: AccountInterface[]
}

const queryAccounts = async (userId: string): Promise<AccountInterface[]> => {

  const payload: UserStateI = await http<UserStateI>(
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({ userId }),
    },
  );

  return Promise.resolve(payload.accounts);
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
