import { AccountInterface } from '../interfaces/account.interface';
import { UserInterface } from '../interfaces/user.interface';

export async function http<T>(
  request: RequestInit,
): Promise<T> {
  const url = 'http://localhost:8080/queries/getUserState';
  const response = await fetch(url, request);
  return await response.json();
}

const queryAccounts = (userId: string): Promise<UserInterface> => {

  return http<UserInterface>(
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({ userId }),
    },
  );

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
