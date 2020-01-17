import React, { Fragment } from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';

const Pages = () => {
    const RouterPage = (
      props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Fragment>
            <Router primary={false} component={Fragment}>
                <RouterPage path="/" pageComponent={<ProjectsPage/>}/>
            </Router>
        </Fragment>
    );
};

export default Pages;
