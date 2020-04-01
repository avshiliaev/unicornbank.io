import React, { Fragment } from 'react';
import FlexGridProject from '../../../components/layout/flex.grid.project';
import BreadCrumbBasic from '../../../components/layout/breadcrumb.basic';
import { connect } from 'react-redux';

const TasksOverview = ({ windowSize, id }) => {
  return (
    <Fragment>
      <div>{JSON.stringify(id)}</div>
    </Fragment>
  );
};

const ProjectHomeRoute = ({ windowSize, location, ...rest }) => {

  const getId = (location) => {
    const pathString = location.pathname.split('/');
    return pathString[pathString.length - 1];
  };

  return (
    <FlexGridProject
      breadCrumbs={<BreadCrumbBasic location={location}/>}
      windowSize={windowSize}
      slotOne={<TasksOverview windowSize={windowSize} id={getId(location)}/>}
      slotTwo={(<div>Right Column</div>)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
    location: state.router.location,
  };
};

export default connect(mapStateToProps)(ProjectHomeRoute);

