import { AccountInterface } from '../interfaces/account.interface';

export async function http<T>(
  request: RequestInit,
): Promise<T> {
  const url = 'http://localhost:8080/queries/getAccountDetail';
  const response = await fetch(url, request);
  return await response.json();
}

const queryAccount = async (accountId: string): Promise<AccountInterface> => {

  const payload: Promise<AccountInterface> = http<AccountInterface>(
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({ uuid: accountId }),
    },
  );

  return Promise.resolve(payload);
};

const accountService = {
  queryAccount,
};
export default accountService;
