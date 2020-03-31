import React, { Fragment } from 'react';
import FlexGridProject from '../../../components/layout/flex.grid.project';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import { connect } from 'react-redux';

const ProjectDetailView = ({ windowSize, id }) => {
  return (
    <Fragment>
      <div>TasksTable</div>
    </Fragment>

  );
};

const ProjectHomeRoute = ({ windowSize, id, path }) => {

  return (
    <FlexGridProject
      breadCrumbs={<BreadCrumbBasic/>}
      windowSize={windowSize}
      slotOne={<ProjectDetailView windowSize={windowSize} id={id}/>}
      slotTwo={(<div>Right Column</div>)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProjectHomeRoute);

