import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_PROJECT} from './docs/project.document';
import TasksTable from '../components/tasks.table';
import {GetProjectQuery} from '../api/interfaces/types.d';
import FlexGridProject from '../components/layout/flex.grid.project';

const ProjectDetailView = ({windowSize, id}) => {

    const {data, loading, error} = useQuery<GetProjectQuery>(GET_PROJECT, {variables: {id}});
    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error!</div>);

    const project = data.getProject;

    return (
        <Fragment>
            <FlexGridProject
                windowSize={windowSize}
                slotOne={<TasksTable tasks={project.tasks}/>}
                slotTwo={(<div>Right Column</div>)}
            />
        </Fragment>

    );
};

export default ProjectDetailView;
