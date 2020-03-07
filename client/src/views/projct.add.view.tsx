import React, {Fragment} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {ADD_PROJECTS, GET_PROJECTS} from './docs/projects.documents';
import {QueryProjectQuery} from '../api/interfaces/types.d';
import ProjectsForm from '../components/projects.form';

const ProjctAddView = ({windowSize}) => {

    const [mutate, {loading, error}] = useMutation(
        ADD_PROJECTS,
        {
            update: (store, {data}) => {
                const projectsData = store.readQuery<QueryProjectQuery>({query: GET_PROJECTS});
                store.writeQuery<QueryProjectQuery>({
                    query: GET_PROJECTS,
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
