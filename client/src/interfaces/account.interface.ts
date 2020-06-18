import { TransactionInterface } from './transaction.interface';

export interface AccountInterface {
  uuid?: string;
  title: string;
  status: string;
  balance: number;
  transactions?: TransactionInterface[]
}
