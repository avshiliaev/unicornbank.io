import React, {Fragment} from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';
import ProjectDetail from './project.detail.page';
import ProjctNewPage from './projct.new.page';

const Pages = () => {
    const RouterPage = (
        props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <RouterPage path="/" pageComponent={<ProjectsPage/>}/>
                <RouterPage path="/projects/new" pageComponent={<ProjctNewPage/>}/>
                <ProjectDetail path="/projects/:id"/>
            </Router>
        </Fragment>
    );
};

export default Pages;
