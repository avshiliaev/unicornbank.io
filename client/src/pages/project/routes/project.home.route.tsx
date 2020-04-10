import React from 'react';
import { connect } from 'react-redux';
import FlexGridProject from '../../../components/layout/flex.grid.project';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import EntitiesTable from '../../../components/entities.table';
import { Project } from '../../../sdk/graphql-zeus';

const ProjectHomeRoute = ({ windowSize, location, project, ...rest }) => {

  const theProject: Project = project;

  return theProject.id !== undefined
    ? (
      <FlexGridProject
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        windowSize={windowSize}
        slotOne={<EntitiesTable entities={theProject.entities}/>}
        slotTwo={(<div>Right Column</div>)}
      />
    )
    : <div/>;
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    location: state.router.location,
    project: state.project,
  };
};

export default connect(mapStateToProps)(ProjectHomeRoute);

