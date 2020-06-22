import React, { useState } from 'react';
import { Avatar, Badge, Button, Col, Empty, List, Row } from 'antd';
import ActionIcon from './action.icon';
import { Link } from '@reach/router';
import { CodeOutlined, FundProjectionScreenOutlined, StarOutlined } from '@ant-design/icons';
import { AccountInterface } from '../interfaces/account.interface';

const Selector = ({ onClick, windowSize }) => {

  return (
    <Row
      gutter={[0, 16]}
      justify="start"
    >
      <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Row justify="start" align="middle">
          <Col>
            <h4>Accounts</h4>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Row justify={windowSize.small ? 'end' : 'center'} align="middle" gutter={16}>
          <Col>
            <Button shape="round" onClick={() => onClick('all')}>all</Button>
          </Col>
          <Col>
            <Button shape="circle" icon={<CodeOutlined/>} onClick={() => onClick('asDeveloper')}/>
          </Col>
          <Col>
            <Button shape="circle" icon={<FundProjectionScreenOutlined/>} onClick={() => onClick('asHost')}/>
          </Col>
          <Col>
            <Button shape="circle" icon={<StarOutlined/>} onClick={() => onClick('starred')}/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const AccountAvatar = ({ badgeNumber, text }) => {

  return (
    <Badge count={badgeNumber}>
      <Avatar style={{ backgroundColor: '#00a2ae' }}>{text}</Avatar>
    </Badge>
  );
};

const AccountsList = ({ accountsOverview, windowSize }) => {

  const accountsState: AccountInterface[] = accountsOverview;

  const [toDisplay, setToDisplay] = useState('all');

  return accountsState.length != 0 ? (
    <div>
      <Selector windowSize={windowSize} onClick={setToDisplay}/>
      <List
        itemLayout={!windowSize.large ? 'vertical' : 'horizontal'}
        dataSource={accountsState}
        renderItem={account => {
          const link = `/account/${account.uuid}/home`;
          const ava = account.title.charAt(0);
          const openTransactions = () => console.log('transactions');
          const numberTransactions = `transactions: ${account.transactions?.length}`;
          const openWorkers = () => console.log('developers');
          return (
            <List.Item actions={[
              <ActionIcon text={3} action={openWorkers}/>,
              <ActionIcon text={numberTransactions} action={openTransactions}/>,
              <div>Del</div>,
            ]}>
              <List.Item.Meta
                avatar={<AccountAvatar text={ava} badgeNumber={account.transactions?.length}/>}
                title={<Link to={link}>{account.title}</Link>}
                description={account.status}
              />
            </List.Item>
          );
        }}
      />
    </div>

  ) : (<Empty></Empty>)
};

export default AccountsList;
