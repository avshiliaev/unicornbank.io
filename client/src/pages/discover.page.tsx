import React, {Fragment} from 'react';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridBasic from '../layout/flex.grid.basic';
import DiscoverQuery from '../containers/discover.query';




const DiscoverPage = (props) => {

    return (
        <Fragment>
            <FlexGridBasic
                windowSize={props.windowSize}
                slotOne={<ProfileStatistics windowSize={props.windowSize} userName={props.userName}/>}
                slotTwo={<ProjectsAddBtn/>}
                mainContent={<DiscoverQuery windowSize={props.windowSize} userName={props.userName}/>}
            />
        </Fragment>
    )
};

export default DiscoverPage;
