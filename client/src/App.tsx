import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initProjectsDev } from './actions/project.actions';
import { Router } from '@reach/router';
import DashboardPage from './pages/dashboard/dashboard.page';
import ProjectPage from './pages/project/project.page';
import UserPage from './pages/user/user.page';

// https://github.com/reduxjs/react-redux/issues/159
const App = ({ user, initProjectsDev }) => {

  useEffect(() => {
    initProjectsDev(user.userId);
  }, []);

  return (
    <Router>
      <DashboardPage path="dashboard/*"/>
      <ProjectPage path="project/:id/*"/>
      <UserPage path="user/:id/*"/>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  initProjectsDev,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
