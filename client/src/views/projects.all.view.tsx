import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ProjectsList from '../components/projects.list';

const ProjectsAllView = (props) => {

  const { windowSize, projects } = props;

  return (
    <Fragment>
      <ProjectsList projects={projects} windowSize={windowSize}/>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
    projects: state.projects,
  };
};

export default connect(
  mapStateToProps,
  {},
)(ProjectsAllView);
