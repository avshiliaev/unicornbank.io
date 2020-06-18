import React from 'react';
import { connect } from 'react-redux';
import FlexGridAccount from '../../../components/layout/flex.grid.account';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import TransactionsTable from '../../../components/transactions.table';
import { AccountInterface } from '../../../interfaces/account.interface';

const AccountHomeRoute = ({ windowSize, location, account, ...rest }) => {

  const theAccount: AccountInterface = account;

  return theAccount.uuid !== undefined
    ? (
      <FlexGridAccount
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        windowSize={windowSize}
        slotOne={<TransactionsTable transactions={theAccount.transactions}/>}
        slotTwo={(<div>Right Column</div>)}
      />
    )
    : <div/>;
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    location: state.router.location,
    account: state.account,
  };
};

export default connect(mapStateToProps)(AccountHomeRoute);

