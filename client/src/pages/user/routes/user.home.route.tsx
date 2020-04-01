import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logOutAction } from '../../../reducers/user.reducer';

const LogOutView = ({ logOutAction }) => {

  return (
    <Button onClick={() => logOutAction()}>Log Out</Button>
  );
};

const UserHomeRoute = ({ windowSize, logOutAction, user, path }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>Slot One</div>}
        slotTwo={<LogOutView logOutAction={logOutAction}/>}
        mainContent={<div>{user.userId}</div>}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

const mapDispatchToProps = {
  logOutAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHomeRoute);
