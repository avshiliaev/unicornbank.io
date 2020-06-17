import React from 'react';
import { List } from 'antd';
import { Link } from '@reach/router';
import { TransactionInterface } from '../interfaces/transaction.interface';

const TransactionsTable = ({ transactions }) => {

  const transactionsList: TransactionInterface[] = transactions;

  return (
    <List
      itemLayout="horizontal"
      dataSource={transactionsList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<Link to={'../transactions/' + item.id}>{item.title}</Link>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default TransactionsTable;
