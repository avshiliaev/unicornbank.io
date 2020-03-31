import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { Button } from 'antd';
import { logOutAction } from '../../../actions/login.actions';
import { connect } from 'react-redux';

const LogOutView = ({ logOutAction }) => {

  return (
    <Button onClick={() => logOutAction()}>Log Out</Button>
  );
};

const UserHomeRoute = ({ windowSize, logOutAction, id, path }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>Slot One</div>}
        slotTwo={<LogOutView logOutAction={logOutAction}/>}
        mainContent={<div>{id}</div>}
      />
    </Fragment>
  );
};

const mapDispatchToProps = {
  logOutAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(UserHomeRoute);
