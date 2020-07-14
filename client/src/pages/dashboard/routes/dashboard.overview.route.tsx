import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import AccountsAddReference from '../../../components/accounts.add.reference';
import { Col, Row } from 'antd';
import FlexContainer from '../../../components/layout/flex.container';
import ProfileIcon from '../../../components/profile.icon';
import AccountsList from '../../../components/accounts.list';
import { AccountsOverviewReducerState } from '../../../interfaces/account.interface';
import BalanceChart from '../../../components/balance.chart';
import PlannedTransactionsList from '../../../components/planned.transactions.list';

const ProfileStatistics = ({ windowSize, auth, accounts }) => {

  let data = [];
  let balance = 0;
  if (accounts.length != 0) {
    data = accounts.map(acc => ({ title: acc.uuid.substring(0, 4), value: Math.abs(acc.balance), type: acc.balance > 0 ? '+' : '-' }));
    balance = accounts
      .map(acc => acc.balance)
      .reduce((a, b) => a + b);
  }

  return (
    <Row>
      <Col
        xs={{ span: 16, order: 2 }}
        sm={{ span: 16, order: 2 }}
        md={{ span: 6, order: 2 }}
        lg={{ span: 24, order: 1 }}
        xl={{ span: 24, order: 1 }}
      >
        <FlexContainer justify={windowSize.large ? 'center' : 'start'} align='center'>
          <h2 style={{ paddingLeft: 16, paddingRight: 16 }}>{auth.userName}</h2>
        </FlexContainer>
      </Col>
      <Col
        xs={{ span: 6, order: 1 }}
        sm={{ span: 4, order: 1 }}
        md={{ span: 4, order: 1 }}
        lg={{ span: 24, order: 2 }}
        xl={{ span: 24, order: 2 }}
      >
        <FlexContainer justify={windowSize.large ? 'center' : 'start'} align='center'>
          <ProfileIcon size={64} id={auth.userId}/>
        </FlexContainer>

      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} order={3}>
        <div style={{ marginTop: 16 }}>
          <BalanceChart data={data} balance={balance}/>
        </div>
      </Col>
    </Row>
  );
};

interface Props {
  auth: any,
  windowSize: any,
  accountsOverview: AccountsOverviewReducerState,
  path: any
}

const DashboardOverviewRoute = ({ auth, windowSize, accountsOverview, ...rest }: Props) => {
  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<ProfileStatistics auth={auth} accounts={accountsOverview.data} windowSize={windowSize}/>}
        slotTwo={<AccountsAddReference/>}
        slotThree={<PlannedTransactionsList/>}
        mainContent={<AccountsList
          accounts={accountsOverview.data}
          windowSize={windowSize}
          loading={accountsOverview.loading}
        />
        }
      />
    </Fragment>
  );

};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    auth: state.auth,
    accountsOverview: state.accountsOverview,
  };
};

export default connect(mapStateToProps)(DashboardOverviewRoute);
