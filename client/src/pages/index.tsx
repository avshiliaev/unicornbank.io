import React, {Fragment} from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';
import ProjectDetail from './project.detail.page';
import ProjctNewPage from './projct.new.page';
import DiscoverPage from './discover.page';

const Pages = ({windowSize, userName}) => {
    const RouterPage = (
        props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <RouterPage path="/" pageComponent={<ProjectsPage windowSize={windowSize} userName={userName}/>}/>
                <RouterPage path="/discover" pageComponent={<DiscoverPage windowSize={windowSize} userName={userName}/>}/>
                <RouterPage path="/projects/new" pageComponent={<ProjctNewPage windowSize={windowSize}/>}/>
                <ProjectDetail windowSize={windowSize} path="/projects/:id"/>
            </Router>
        </Fragment>
    );
};

export default Pages;
