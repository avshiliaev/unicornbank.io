import React from 'react';
import FlexGridBasic from '../layout/flex.grid.basic';
import TasksTable from './tasks.table';

const ProjectTitle = ({project}) => {
    return (
        <div>{project.title}</div>
    )
};

const ProjectDescription = ({project}) => {
    return (
        <div>
            <div>Tags: {project.tags.length}</div>
            <div>Tasks: {project.tasks.length}</div>
            <div>Team: {project.workers.length}</div>
        </div>
    )
};

const ProjectDetailView = ({windowSize, project}) => {

    return (
        <FlexGridBasic
            windowSize={windowSize}
            slotOne={<ProjectTitle project={project}/>}
            slotTwo={<ProjectDescription project={project}/>}
            mainContent={<TasksTable tasks={project.tasks}/>}
        />
    )
};

export default ProjectDetailView;
