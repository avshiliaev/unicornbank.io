import React from 'react';
import {Router} from '@reach/router';
import DashboardPage from './dashboard.page';
import ProjectPage from './project.page';

const Pages = ({windowSize, userName, location}) => {

    const currentPath = location.split('/');

    return (
        <Router>
            <DashboardPage windowSize={windowSize} location={currentPath} userName={userName} path="dashboard/*"/>
            <ProjectPage windowSize={windowSize} path="project/:id/*"/>
        </Router>
    );
};

export default Pages;
