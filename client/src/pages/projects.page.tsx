import React, {Fragment} from 'react';

import ProjectsQuery from '../containers/projects.query';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridBasic from '../layout/flex.grid.basic';


const ProjectsPage = (props) => {

    return (
        <Fragment>
            <FlexGridBasic
                windowSize={props.windowSize}
                slotOne={<ProfileStatistics windowSize={props.windowSize} userName={props.userName}/>}
                slotTwo={<ProjectsAddBtn/>}
                mainContent={<ProjectsQuery windowSize={props.windowSize} userName={props.userName}/>}
            />
        </Fragment>
    )
};

export default ProjectsPage;
