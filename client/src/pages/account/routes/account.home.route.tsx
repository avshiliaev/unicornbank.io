import React from 'react';
import { connect } from 'react-redux';
import FlexGridAccount from '../../../components/layout/flex.grid.account';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import TransactionsTable from '../../../components/transactions.table';
import { AccountReducerState } from '../../../interfaces/account.interface';

interface Props {
  windowSize: any,
  location: any,
  account: AccountReducerState,
  path: any
}

const AccountHomeRoute = ({ windowSize, location, account, ...rest }: Props) => {

  return account.loading === false
    ? (
      <FlexGridAccount
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        windowSize={windowSize}
        slotOne={<TransactionsTable transactions={account.data.transactions}/>}
        slotTwo={(<div>Right Column</div>)}
      />
    )
    : (
      <div>loading...</div>
    );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    location: state.router.location,
    account: state.account,
  };
};

export default connect(mapStateToProps)(AccountHomeRoute);

