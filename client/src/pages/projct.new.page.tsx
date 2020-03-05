import React, {Fragment} from 'react';
import FlexGridBasic from '../layout/flex.grid.basic';
import ProjectsAdd from '../containers/projects.add';

const ProjctNewPage = ({windowSize}) => {

    return (
        <Fragment>
            <FlexGridBasic
                windowSize={windowSize}
                slotOne={<div>subHeaderLarge</div>}
                slotTwo={<div>subSubHeaderLarge</div>}
                mainContent={<ProjectsAdd/>}
            />
        </Fragment>
    )
};

export default ProjctNewPage;
