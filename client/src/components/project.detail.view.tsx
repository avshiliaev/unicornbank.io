import React from 'react';
import FlexGridBasic from '../layout/flex.grid.basic';

const MainContent = () => {
    return (
        <div>Main Content</div>
    )
};

const SubHeaderLarge = ({project}) => {
    return (
        <div>{project.title}</div>
    )
};

const ProjectDetailView = ({large, project}) => {

    return (
        <FlexGridBasic
            large={large}
            subHeaderLarge={<SubHeaderLarge project={project}/>}
            subHeaderSmall={<SubHeaderLarge project={project}/>}
            subSubHeaderLarge={<SubHeaderLarge project={project}/>}
            subSubHeaderSmall={<SubHeaderLarge project={project}/>}
            mainContent={<MainContent/>}
        />
    )
};

export default ProjectDetailView;
