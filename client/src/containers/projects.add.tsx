import React, {Fragment} from 'react';
import ProjectsForm from '../components/projects.form';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {GET_PROJECTS} from './projects.query';

const ProjectsAdd = () => {

    const ADD_PROJECTS = gql`
        mutation addProject($input: [AddProjectInput!]!){
            addProject(
                input: $input
            ) {
                project {
                    id
                    __typename
                }
                __typename
            }
        }
    `;

    const [mutate, {loading, error}] = useMutation(
        ADD_PROJECTS,
        {
            refetchQueries: [{query: GET_PROJECTS}]
        }
    );
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    return (
        <Fragment>
            <ProjectsForm mutate={mutate}/>
        </Fragment>
    );
};

export default ProjectsAdd;
