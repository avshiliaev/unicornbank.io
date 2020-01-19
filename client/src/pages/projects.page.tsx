import React, {Fragment} from 'react';
import ProjectsQuery from '../containers/projects.query';
import ProjectsAdd from '../containers/projects.add';

const ProjectsPage = () => {
    return (
        <Fragment>
            <div>
                <h4>New project</h4>
                <ProjectsAdd/>
            </div>
            <div>
                <h4>All projects</h4>
                <ProjectsQuery/>
            </div>
        </Fragment>
    )
};

export default ProjectsPage;
