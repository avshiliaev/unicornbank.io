import React, { Fragment } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logOutAction } from '../../../reducers/auth.reducer';
import { User } from '../../../sdk/graphql-zeus';
import FlexGridUser from '../../../components/layout/flex.grid.user';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';

const LogOutButton = ({ logOutAction }) => {
  return (
    <Button onClick={() => logOutAction()}>Log Out</Button>
  );
};

const MyProfile = ({ windowSize, theUser, logOutAction, location }) => {

  return (
    <Fragment>
      <FlexGridUser
        windowSize={windowSize}
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        slotOne={<div>
          <LogOutButton logOutAction={logOutAction}/>
        </div>}
        slotTwo={
          <div>
            RightCol
          </div>
        }
      />
    </Fragment>
  );
};

const OtherProfile = ({ windowSize, theUser, location }) => {

  return (
    <Fragment>
      <FlexGridUser
        windowSize={windowSize}
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        slotOne={<div>This is NOT me</div>}
        slotTwo={<div>{theUser.username}</div>}
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
          location={location}
          windowSize={windowSize}
          theUser={theUser}
          logOutAction={logOutAction}
        />
        : <OtherProfile windowSize={windowSize} theUser={theUser} location={location}/>
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
