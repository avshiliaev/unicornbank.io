import { AccountInterface } from './account.interface';

export interface UserInterface {
  id: string;
  username: string;
  accounts?: AccountInterface[]
}

export interface UserStateInterface {
  isLoggedIn: boolean,
  userId: string | undefined,
  userName: string | undefined
}
