import React, {Fragment} from 'react';
import {useMutation} from '@apollo/react-hooks';
import ProjectsDelBtn from '../components/projects.del.btn';
import {DELETE_PROJECT} from './docs/project.document';

// https://discuss.dgraph.io/t/dgraph-graphql-how-to-delete-from-list/5482

const ProjectDeleteView = ({project}) => {

    const variables = {filter: {id: [project.id]}};
    const [mutate, {loading, error}] = useMutation(
        DELETE_PROJECT,
        //{
        //    refetchQueries: [{query: GET_PROJECTS}]
        //}
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
