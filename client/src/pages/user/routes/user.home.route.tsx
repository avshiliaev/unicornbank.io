import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logOutAction } from '../../../reducers/user.reducer';

const LogOutButton = ({ logOutAction }) => {

  return (
    <Button onClick={() => logOutAction()}>Log Out</Button>
  );
};

const UserHomeRoute = ({ windowSize, logOutAction, location, user, ...rest }) => {

  const getId = (location) => {
    const pathString = location.pathname.split('/');
    return pathString[2];
  };

  const id = getId(location);

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={id === user.userId ? (<div>This is me</div>) : (<div>This is NOT me</div>)}
        slotTwo={<LogOutButton logOutAction={logOutAction}/>}
        mainContent={<div>{id}</div>}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
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
