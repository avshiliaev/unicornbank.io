import React, {Fragment} from 'react';
import FlexGridDashboard from '../components/layout/flex.grid.dashboard';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROJECTS} from './docs/projects.documents';
import {QueryProjectQuery} from '../api/interfaces/types.d';
import ProjectsList from '../components/projects.list';


const DiscoverView = (props) => {

    const {data, loading, error} = useQuery<QueryProjectQuery>(GET_PROJECTS);
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    const projects = data.queryProject;

    return (
        <Fragment>
            <FlexGridDashboard
                windowSize={props.windowSize}
                slotOne={<div>Slot One</div>}
                slotTwo={<div>Slot Two</div>}
                mainContent={<ProjectsList projects={projects} windowSize={props.windowSize}/>}
            />
        </Fragment>
    )
};

export default DiscoverView;
