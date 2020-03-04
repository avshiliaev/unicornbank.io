import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import ProjectsList from '../components/projects.list';
import {GET_PROJECTS} from './projects.documents';

const DiscoverQuery = ({windowSize, userName}) => {

    const {data, loading, error} = useQuery(GET_PROJECTS);
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    const projects = data.queryProject;

    return (
        <Fragment>
            <ProjectsList projects={projects} windowSize={windowSize}/>
        </Fragment>
    );
};

export default DiscoverQuery;
