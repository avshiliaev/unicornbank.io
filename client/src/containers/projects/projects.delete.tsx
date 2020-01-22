import React, {Fragment} from 'react';
import ProjectsDelButton from '../../components/projects.del.button';
import {useMutation} from '@apollo/react-hooks';
import {DELETE_PROJECT, GET_PROJECTS} from './projects.documents';

const ProjectsDelete = ({project}) => {

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
            <ProjectsDelButton mutate={mutate} variables={variables}/>
        </Fragment>
    );
};

export default ProjectsDelete;
