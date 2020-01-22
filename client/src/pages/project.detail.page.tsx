import React, {Fragment} from 'react';
import ProjectGet from '../containers/project/project.get';

const ProjectDetail = (props) => {

    return (
        <Fragment>
            <ProjectGet id={props.id}/>
        </Fragment>
    )
};

export default ProjectDetail;
