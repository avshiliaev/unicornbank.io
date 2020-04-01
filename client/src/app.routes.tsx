import { Router } from '@reach/router';
import React from 'react';
import DashboardPage from './pages/dashboard/dashboard.page';
import ProjectPage from './pages/project/project.page';
import UserPage from './pages/user/user.page';
import ProjectHomeRoute from './pages/project/routes/project.home.route';
import UserHomeRoute from './pages/user/routes/user.home.route';
import DashboardOverviewRoute from './pages/dashboard/routes/dashboard.overview.route';
import DashboardDiscoverRoute from './pages/dashboard/routes/dashboard.discover.route';
import DashboardNewRoute from './pages/dashboard/routes/dashboard.new.route';

const Root = ({ children, path }) => {

  return (
    <div>{children}</div>
  );
};

const AppRoutes = () => {

  return (
    <Router>
      <Root path='/'>
        <DashboardPage path="dashboard">
          <DashboardOverviewRoute path="/"/>
          <DashboardDiscoverRoute path="discover"/>
          <DashboardNewRoute path="new"/>
        </DashboardPage>
        <ProjectPage path="project/:id">
          <ProjectHomeRoute path="/"/>
        </ProjectPage>
        <UserPage path="user/:id">
          <UserHomeRoute path="/"/>
        </UserPage>
      </Root>
    </Router>
  );
};

export default AppRoutes;
