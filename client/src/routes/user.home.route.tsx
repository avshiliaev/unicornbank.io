import React, { Fragment } from 'react';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';
import LogOutView from '../views/log.out.view';

const UserHomeRoute = ({ windowSize, path, id }) => {

  return (
    <Fragment>
      <FlexGridDashboard
        windowSize={windowSize}
        slotOne={<div>Slot One</div>}
        slotTwo={<LogOutView/>}
        mainContent={<div>{id}</div>}
      />
    </Fragment>
  );
};

export default UserHomeRoute;
