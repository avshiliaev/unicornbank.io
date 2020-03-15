import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QueryProjectQuery} from '../api/interfaces/types.d';
import ProjectsList from '../components/projects.list';
import {GET_PROJECT} from './docs/project.document';


const DiscoverView = ({windowSize}) => {

    const {data, loading, error} = useQuery<QueryProjectQuery>(GET_PROJECT);
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    const projects = data.queryProject;

    return (
        <Fragment>
            <ProjectsList projects={projects} windowSize={windowSize}/>
        </Fragment>
    )
};

export default DiscoverView;
