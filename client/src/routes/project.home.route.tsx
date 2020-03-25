import React from 'react';
import ProjectDetailView from '../views/project.detail.view';
import FlexGridProject from '../components/layout/flex.grid.project';
import BreadCrumbBasic from '../components/layout/breadcrumb.basic';

const ProjectHomeRoute = ({ windowSize, id, path }) => {

  return (
    <FlexGridProject
      breadCrumbs={<BreadCrumbBasic/>}
      windowSize={windowSize}
      slotOne={<ProjectDetailView id={id}/>}
      slotTwo={(<div>Right Column</div>)}
    />
  );
};

export default ProjectHomeRoute;
