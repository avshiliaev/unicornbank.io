import React, {Fragment} from 'react';
import {useMutation} from '@apollo/react-hooks';
import ProjectsDelBtn from '../components/projects.del.btn';
import {DELETE_PROJECT, GET_PROJECTS} from './docs/projects.documents';

const ProjectDeleteView = ({project}) => {

    const variables = {filter: {id: [project.id]}};
    const [mutate, {loading, error}] = useMutation(
        DELETE_PROJECT,
        {
            refetchQueries: [{query: GET_PROJECTS}]
        }
    );
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    return (
        <Fragment>
            <ProjectsDelBtn mutate={mutate} variables={variables}/>
        </Fragment>
    );
};

export default ProjectDeleteView;
