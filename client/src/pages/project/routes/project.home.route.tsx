import React from 'react';
import { connect } from 'react-redux';
import FlexGridProject from '../../../components/layout/flex.grid.project';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import TasksTable from '../../../components/tasks.table';
import { Project } from '../../../sdk/graphql-zeus';

const ProjectHomeRoute = ({ windowSize, location, project, ...rest }) => {

  const theProject: Project = project;

  return theProject.id !== undefined
    ? (
      <FlexGridProject
        breadCrumbs={<BreadCrumbBasic location={location}/>}
        windowSize={windowSize}
        slotOne={<TasksTable tasks={theProject.tasks}/>}
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

