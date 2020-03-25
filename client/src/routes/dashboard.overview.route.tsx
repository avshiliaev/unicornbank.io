import React, { Fragment } from 'react';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';
import ProfileStatisticsView from '../views/profile.statistics.view';
import ProjectsAddReference from '../components/projects.add.reference';
import ProjectsAllView from '../views/projects.all.view';

const DashboardOverviewRoute = ({ path, windowSize }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<ProfileStatisticsView/>}
        slotTwo={<ProjectsAddReference/>}
        mainContent={<ProjectsAllView/>}
      />
    </Fragment>
  );
};

export default DashboardOverviewRoute;
