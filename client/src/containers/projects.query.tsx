import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import ProjectsList from '../components/projects.list';
import {GET_PROJECTS, GET_PROJECTS_OF_USER} from './projects.documents';

const ProjectsQuery = ({windowSize, userName}) => {

    const {data, loading, error} = useQuery(GET_PROJECTS_OF_USER, {variables:{filter:{username: {eq: userName}}}});
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    console.log(data)

    const projects = data.queryUser[0].roles.map((role) => role.project);

    return (
        <Fragment>
            <ProjectsList projects={projects} windowSize={windowSize}/>
        </Fragment>
    );
};

export default ProjectsQuery;
