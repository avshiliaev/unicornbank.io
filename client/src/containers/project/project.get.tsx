import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROJECT} from './project.document';

const ProjectGet = ({id}) => {

    const {data, loading, error} = useQuery(GET_PROJECT, {variables: {id}});
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    return (
        <Fragment>
            <div>{data.getProject.title}</div>
            <div>{data.getProject.tags}</div>
            <div>{data.getProject.tasks}</div>
        </Fragment>
    );
};

export default ProjectGet;
