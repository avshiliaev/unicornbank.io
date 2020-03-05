import React, {Fragment} from 'react';
import ProjectGet from '../containers/project.get';

const ProjectDetail = (props) => {

    return (
        <Fragment>
            <ProjectGet windowSize={props.windowSize} id={props.id}/>
        </Fragment>
    )
};

export default ProjectDetail;
