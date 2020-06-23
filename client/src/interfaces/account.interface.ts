import { TransactionInterface } from './transaction.interface';

export interface AccountInterface {
  uuid?: string;
  title: string;
  status: string;
  balance: number;
  transactions?: TransactionInterface[]
}

export interface AccountReducerState {
  loading: boolean,
  error: boolean,
  data?: AccountInterface
}

export interface AccountAction {
  type: string,
  params?: any
  state: AccountReducerState,
}

export interface AccountsOverviewReducerState {
  loading: boolean,
  error: boolean,
  data?: AccountInterface[]
}

export interface AccountsOverviewAction {
  type: string,
  params?: any
  state: AccountsOverviewReducerState,
}
