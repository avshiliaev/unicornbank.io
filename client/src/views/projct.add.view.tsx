import React, {Fragment} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {ADD_PROJECTS} from './docs/projects.documents';
import ProjectsForm from '../components/projects.form';
import {QueryProjectQuery} from '../../../api/interfaces/types.d';
import {GET_PROJECT} from './docs/project.document';

const ProjctAddView = ({windowSize}) => {

    const [mutate, {loading, error}] = useMutation(
        ADD_PROJECTS,
        {
            update: (store, {data}) => {
                const projectsData = store.readQuery<QueryProjectQuery>({query: GET_PROJECT});
                store.writeQuery<QueryProjectQuery>({
                    query: GET_PROJECT,
                    data: {queryProject: [...projectsData!.queryProject, ...data!.addProject.project]}
                });
            }
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

export default ProjctAddView;
