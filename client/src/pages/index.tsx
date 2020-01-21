import React, { Fragment } from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';
const ProjectDetail = props => <h2>{props.id}</h2>;
const Pages = () => {
    const RouterPage = (
      props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <RouterPage path="/" pageComponent={<ProjectsPage/>}/>
                <ProjectDetail path="/projects/:id"/>
            </Router>
        </Fragment>
    );
};

export default Pages;
