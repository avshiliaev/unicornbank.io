import React from 'react';
import { Avatar, Badge, Empty, List } from 'antd';
import ActionIcon from './action.icon';
import { Link } from '@reach/router';
import { AccountInterface } from '../interfaces/account.interface';

const AccountAvatar = ({ badgeNumber, text }) => {

  return (
    <Badge count={badgeNumber}>
      <Avatar style={{ backgroundColor: '#00a2ae' }}>{text}</Avatar>
    </Badge>
  );
};

interface Props {
  accounts: AccountInterface[],
  windowSize: any
}

const AccountsList = ({ accounts, windowSize }: Props) => {

  return accounts.length > 0 ? (
    <div>
      <List
        itemLayout={!windowSize.large ? 'vertical' : 'horizontal'}
        dataSource={accounts}
        renderItem={account => {
          const link = `/account/${account.uuid}/home`;
          const ava = account.balance.toString();
          const openTransactions = () => console.log('transactions');
          const numberTransactions = `transactions: ${account.transactions?.length}`;
          return (
            <List.Item actions={[
              <ActionIcon text={numberTransactions} action={openTransactions}/>,
              <Badge status="success" />,
            ]}>
              <List.Item.Meta
                avatar={<AccountAvatar text={ava} badgeNumber={account.transactions?.length}/>}
                title={<Link to={link}>{"DE34 0932 2356 9305 04"}</Link>}
                description={account.status}
              />
            </List.Item>
          );
        }}
      />
    </div>

  ) : (<Empty description={'You have no accounts yet'}/>);
};

export default AccountsList;
