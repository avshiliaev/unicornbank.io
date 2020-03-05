import React, {Fragment} from 'react';
import ProjectGet from '../containers/project.get';

const ProjectDetail = ({windowSize, id}) => {

    return (
        <Fragment>
            <ProjectGet windowSize={windowSize} id={id}/>
        </Fragment>
    )
};

export default ProjectDetail;
