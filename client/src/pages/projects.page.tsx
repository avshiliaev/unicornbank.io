import React, { Fragment } from 'react';
import ProjectsQuery from '../containers/projects.query';

const ProjectsPage = () => {
    return(
        <Fragment>
            <h4>All projects</h4>
           <ProjectsQuery/>
        </Fragment>
    )
};

export default ProjectsPage;
