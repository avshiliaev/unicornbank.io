import React, {Fragment} from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';
import ProjectDetail from './project.detail.page';
import ProjctNewPage from './projct.new.page';

const Pages = ({windowSize}) => {
    const RouterPage = (
        props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <RouterPage path="/" pageComponent={<ProjectsPage windowSize={windowSize}/>}/>
                <RouterPage path="/projects/new" pageComponent={<ProjctNewPage windowSize={windowSize}/>}/>
                <ProjectDetail windowSize={windowSize} path="/projects/:id"/>
            </Router>
        </Fragment>
    );
};

export default Pages;
