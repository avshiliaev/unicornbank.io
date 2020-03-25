import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { initProjectsDev } from './actions/project.actions';
import ProjectsList from '../components/projects.list';

const ProjectsAllView = (props) => {

  const { windowSize, projects, user, initProjectsDev } = props;

  useEffect(() => {
    initProjectsDev(user.userName);
  }, []);

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

const mapDispatchToProps = {
  initProjectsDev,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsAllView);
