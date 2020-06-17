import { TransactionInterface } from './transaction.interface';

export interface AccountInterface {
  id?: string;
  title: string;
  description: string;
  transactions?: TransactionInterface[]
}
