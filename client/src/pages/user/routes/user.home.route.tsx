import React, { Fragment } from 'react';
import FlexGridDashboard from '../../../components/layout/flex.grid.dashboard';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logOutAction } from '../../../reducers/auth.reducer';
import { User } from '../../../sdk/graphql-zeus';

const LogOutButton = ({ logOutAction }) => {
  return (
    <Button onClick={() => logOutAction()}>Log Out</Button>
  );
};

const MyProfile = ({ windowSize, theUser, logOutAction }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>This is me</div>}
        slotTwo={<LogOutButton logOutAction={logOutAction}/>}
        mainContent={
          <div>
            <div>Maintainer: {theUser.host.length}</div>
            <div>Developer: {theUser.developer.map(dev => dev.project).length}</div>
          </div>
        }
      />
    </Fragment>
  );
};

const OtherProfile = ({ windowSize, theUser }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>This is NOT me</div>}
        slotTwo={<div>Slot two</div>}
        mainContent={<div>{theUser.username}</div>}
      />
    </Fragment>
  );
};

const UserHomeRoute = ({ windowSize, logOutAction, location, auth, user, ...rest }) => {

  const theUser: User = user;

  return theUser.id !== undefined
    ? (
      theUser.id === auth.userId
        ? <MyProfile
          windowSize={windowSize}
          theUser={theUser}
          logOutAction={logOutAction}
        />
        : <OtherProfile windowSize={windowSize} theUser={theUser}/>
    )
    : <div/>;
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
