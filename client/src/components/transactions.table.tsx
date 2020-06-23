import React from 'react';
import { Badge, List } from 'antd';
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
            title={<Link to={'../transactions/' + item.uuid}>{item.amount}</Link>}
            description={<Badge status="success" />}
          />
        </List.Item>
      )}
    />
  );
};

export default TransactionsTable;
