import React, {Fragment} from 'react';

import ProjectsQuery from '../containers/projects.query';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridBasic from '../layout/flex.grid.basic';


const ProjectsPage = ({windowSize, userName}) => {

    return (
        <Fragment>
            <FlexGridBasic
                windowSize={windowSize}
                slotOne={<ProfileStatistics windowSize={windowSize} userName={userName}/>}
                slotTwo={<ProjectsAddBtn/>}
                mainContent={<ProjectsQuery windowSize={windowSize} userName={userName}/>}
            />
        </Fragment>
    )
};

export default ProjectsPage;
