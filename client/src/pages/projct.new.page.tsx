import React, {Fragment} from 'react';
import {WrappedProjectsAdd} from '../containers/projects.add';
import FlexGridBasic from '../layout/flex.grid.basic';

const ProjctNewPage = ({windowSize}) => {

    return (
        <Fragment>
            <FlexGridBasic
                windowSize={windowSize}
                slotOne={<div>subHeaderLarge</div>}
                slotTwo={<div>subSubHeaderLarge</div>}
                mainContent={<WrappedProjectsAdd/>}
            />
        </Fragment>
    )
};

export default ProjctNewPage;
