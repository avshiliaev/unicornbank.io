import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROJECTS_OF_USER} from './docs/projects.documents';
import ProjectsList from '../components/projects.list';


const ProjectsAllView = ({userName, windowSize}) => {

    const {data, loading, error} = useQuery(GET_PROJECTS_OF_USER, {variables: {filter: {username: {eq: userName}}}});
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    const projects = data.queryUser[0].roles.map((role) => role.project);

    return (
        <Fragment>
            <ProjectsList projects={projects} windowSize={windowSize}/>
        </Fragment>
    )
};

export default ProjectsAllView;
