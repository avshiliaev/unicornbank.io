import React, {Fragment} from 'react';
import ProjctAddView from '../views/projct.add.view';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';

const DashboardNewRoute = ({windowSize, ...rest}) => {

    return (
        <Fragment>
            <FlexGridDashboard
                windowSize={windowSize}
                slotOne={<div>Slot One</div>}
                slotTwo={<div>Slot Two</div>}
                mainContent={<ProjctAddView windowSize={windowSize}/>}
            />
        </Fragment>
    )
};

export default DashboardNewRoute;
