import React from 'react';
import FlexGridBasic from '../layout/flex.grid.basic';

const MainContent = () => {
    return (
        <div>Main Content</div>
    )
};

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
            mainContent={<MainContent/>}
        />
    )
};

export default ProjectDetailView;
