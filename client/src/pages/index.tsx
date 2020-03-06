import React from 'react';
import {Router} from '@reach/router';
import DashboardPage from './dashboard.page';
import ProjectPage from './project.page';

const Pages = ({windowSize, userName, location}) => {

    const currentPath = location.split('/');

    return (
        <Router>
            <ProjectPage windowSize={windowSize} path="project/:id/*"/>
            <DashboardPage windowSize={windowSize} location={currentPath} userName={userName} path="dashboard/*"/>
        </Router>
    );
};

export default Pages;
