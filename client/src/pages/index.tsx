import { Router } from '@reach/router';
import DashboardPage from './dashboard/dashboard.page';
import ProjectPage from './project/project.page';
import UserPage from './user/user.page';
import React from 'react';

const Pages = () => {

  return (
    <Router>
      <DashboardPage path="dashboard/*"/>
      <ProjectPage path="project/:id/*"/>
      <UserPage path="user/:id/*"/>
    </Router>
  );
};

export default Pages;
