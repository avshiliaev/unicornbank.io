import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logOutAction } from '../../../reducers/auth.reducer';

const LogOutButton = ({ logOutAction }) => {

  return (
    <Button onClick={() => logOutAction()}>Log Out</Button>
  );
};

const UserHomeRoute = ({ windowSize, logOutAction, location, auth, user, ...rest }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={user.id === auth.userId ? (<div>This is me</div>) : (<div>This is NOT me</div>)}
        slotTwo={<LogOutButton logOutAction={logOutAction}/>}
        mainContent={<div>{user.id}</div>}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    auth: state.auth,
    user: state.user,
    location: state.router.location,
  };
};

const mapDispatchToProps = {
  logOutAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHomeRoute);
