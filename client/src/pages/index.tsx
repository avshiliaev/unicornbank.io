import React, { Fragment } from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';
import ProjectDetail from './project.detail.page';
import NewProjectPage from './newProject.page';

const Pages = () => {
    const RouterPage = (
      props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <RouterPage path="/" pageComponent={<ProjectsPage/>}/>
                <RouterPage path="/projects/new" pageComponent={<NewProjectPage/>}/>
                <ProjectDetail path="/projects/:id"/>
            </Router>
        </Fragment>
    );
};

export default Pages;
