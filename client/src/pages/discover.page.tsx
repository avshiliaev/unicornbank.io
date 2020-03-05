import React, {Fragment} from 'react';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridBasic from '../layout/flex.grid.basic';
import DiscoverQuery from '../containers/discover.query';




const DiscoverPage = ({windowSize, userName}) => {

    return (
        <Fragment>
            <FlexGridBasic
                windowSize={windowSize}
                slotOne={<ProfileStatistics windowSize={windowSize} userName={userName}/>}
                slotTwo={<ProjectsAddBtn/>}
                mainContent={<DiscoverQuery windowSize={windowSize} userName={userName}/>}
            />
        </Fragment>
    )
};

export default DiscoverPage;
