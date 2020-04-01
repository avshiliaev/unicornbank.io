import { Router } from '@reach/router';
import React, { Fragment } from 'react';
import DashboardOverviewRoute from './dashboard.overview.route';
import DashboardDiscoverRoute from './dashboard.discover.route';
import DashboardNewRoute from './dashboard.new.route';

const DashboardPageRoutes = () => {

  return (
    <Router primary={false} component={Fragment}>
      <DashboardOverviewRoute path="/"/>
      <DashboardDiscoverRoute path="discover"/>
      <DashboardNewRoute path="new"/>
    </Router>
  );
};

export default DashboardPageRoutes;
