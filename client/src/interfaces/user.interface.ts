import { AccountInterface } from './account.interface';

export interface UserInterface {
  id: string;
  username: string;
  accounts?: AccountInterface[]
}
