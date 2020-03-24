import React from 'react';
import { Router } from '@reach/router';
import DashboardPage from './dashboard.page';
import ProjectPage from './project.page';
import LoginPage from './login.page';

const Pages = () => {

  return (
    <Router>
      <DashboardPage path="dashboard/*"/>
      <ProjectPage path="project/:id/*"/>
      <LoginPage  path="login"/>
    </Router>
  );
};

export default Pages;
