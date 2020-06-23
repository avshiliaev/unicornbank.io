import { AccountInterface } from './account.interface';

export interface UserInterface {
  id?: string;
  username: string;
  accounts?: AccountInterface[]
}

export interface UserReducerState {
  loading: boolean,
  error: boolean,
  data?: UserInterface
}

export interface UserAction {
  type: string,
  params?: any
  state: UserReducerState,
}

