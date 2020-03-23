import React from 'react';
import ProjectDetailView from '../views/project.detail.view';
import FlexGridProject from '../components/layout/flex.grid.project';
import BreadCrumbBasic from '../components/layout/breadcrumb.basic';

const ProjectHomeRoute = ({ windowSize, id, ...rest }) => {

  return (
    <FlexGridProject
      breadCrumbs={<BreadCrumbBasic/>}
      windowSize={windowSize}
      slotOne={<ProjectDetailView windowSize={windowSize} id={id}/>}
      slotTwo={(<div>Right Column</div>)}
    />
  );
};

export default ProjectHomeRoute;
