import React, { Fragment } from 'react';
import FlexGridProject from '../../../components/layout/flex.grid.project';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import { connect } from 'react-redux';
import TasksTable from '../../../components/tasks.table';

const ProjectHomeRoute = ({ windowSize, location, project, ...rest }) => {

  return (
    <FlexGridProject
      breadCrumbs={<BreadCrumbBasic location={location}/>}
      windowSize={windowSize}
      slotOne={<TasksTable tasks={project.tasks}/>}
      slotTwo={(<div>Right Column</div>)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
    location: state.router.location,
    project: state.project
  };
};

export default connect(mapStateToProps)(ProjectHomeRoute);

