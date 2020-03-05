import React from 'react';
import {Router} from '@reach/router';
import DashboardRoute from './dashboard.route';
import ProjectRoute from './project.route';

const Pages = ({windowSize, userName, location}) => {

    const currentPath = location.split('/');

    return (
        <Router>
            <ProjectRoute windowSize={windowSize} path="project/:id/*"/>
            <DashboardRoute windowSize={windowSize} location={currentPath} userName={userName} path="dashboard/*"/>
        </Router>
    );
};

export default Pages;
