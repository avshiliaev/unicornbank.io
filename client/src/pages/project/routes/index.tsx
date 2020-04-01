import { Router } from '@reach/router';
import React, { Fragment } from 'react';
import ProjectHomeRoute from './project.home.route';

const ProjectPageRoutes = ({ id }) => {

  return (
    <Router primary={false} component={Fragment}>
      <ProjectHomeRoute path='/' id={id}/>
    </Router>
  );
};

export default ProjectPageRoutes;
