import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import ProjectsList from '../../components/projects.list';
import {GET_PROJECTS} from './projects.documents';

const ProjectsQuery = () => {

    const {data, loading, error} = useQuery(GET_PROJECTS);
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    return (
        <Fragment>
            <ProjectsList projects={data.queryProject}/>
        </Fragment>
    );
};

export default ProjectsQuery;
