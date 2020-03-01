import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROJECT} from './project.document';
import ProjectDetailView from '../components/project.detail.view';

const ProjectGet = ({id, windowSize}) => {

    const {data, loading, error} = useQuery(GET_PROJECT, {variables: {id}});
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    return (
        <ProjectDetailView windowSize={windowSize} project={data.getProject}/>
    );
};

export default ProjectGet;
