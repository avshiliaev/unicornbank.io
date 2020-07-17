import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import AccountsActions from '../../../components/accounts.actions';
import AccountsList from '../../../components/accounts.list';
import { AccountsOverviewReducerState } from '../../../interfaces/account.interface';
import NotificationsList from '../../../components/notifications.list';
import ProfileStats from '../../../components/profile.stats';

interface Props {
  auth: any,
  windowSize: any,
  accountsOverview: AccountsOverviewReducerState,
  path: any
}

const DashboardOverviewRoute = ({ auth, windowSize, accountsOverview, ...rest }: Props) => {

  const balance = accountsOverview.data.length ? accountsOverview.data
    .map(acc => acc.balance)
    .reduce((a, b) => a + b) : 0;

  const notifications = [
    {
      title: 'Title',
      description: 'description',
    },
    {
      title: 'Title',
      description: 'description',
    },
    {
      title: 'Title',
      description: 'description',
    },
  ];

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<ProfileStats auth={auth} balance={balance} windowSize={windowSize}/>}
        slotTwo={<AccountsActions/>}
        slotThree={<NotificationsList notifications={notifications}/>}
        mainContent={
          <AccountsList
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
