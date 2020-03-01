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

const ProjectDetailView = ({windowSize, project}) => {

    return (
        <FlexGridBasic
            windowSize={windowSize}
            slotOne={<ProjectTitle project={project}/>}
            slotTwo={<ProjectTitle project={project}/>}
            mainContent={<MainContent/>}
        />
    )
};

export default ProjectDetailView;
