import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logOutAction } from './actions/login.actions';
import { Button } from 'antd';

const LogOutView = ({ logOutAction }) => {

  return (
    <Fragment>
      <Button onClick={() => logOutAction()}>Log Out</Button>
    </Fragment>
  );
};

const mapDispatchToProps = {
  logOutAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(LogOutView);
