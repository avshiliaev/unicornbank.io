import React, { Fragment } from 'react';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';
import DiscoverView from '../views/discover.view';

const DashboardDiscoverRoute = ({ windowSize, ...rest }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>Slot One</div>}
        slotTwo={<div>Slot Two</div>}
        mainContent={<DiscoverView windowSize={windowSize}/>}
      />
    </Fragment>
  );
};

export default DashboardDiscoverRoute;
