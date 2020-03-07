import React, {Fragment} from 'react';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';
import ProfileStatisticsView from '../views/profile.statistics.view';
import ProjectsAddReference from '../components/projects.add.reference';
import ProjectsAllView from '../views/projects.all.view';

const DashboardOverviewRoute = ({windowSize, userName, ...rest}) => {

    return (
        <Fragment>
            <FlexGridDashboard
                windowSize={windowSize}
                slotOne={<ProfileStatisticsView windowSize={windowSize} userName={userName}/>}
                slotTwo={<ProjectsAddReference/>}
                mainContent={<ProjectsAllView  userName={userName} windowSize={windowSize}/>}
            />
        </Fragment>
    )
};

export default DashboardOverviewRoute;
