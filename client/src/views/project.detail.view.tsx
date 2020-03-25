import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const ProjectDetailView = (props) => {

  const { windowSize, id } = props;

  return (
    <Fragment>
      <div>TasksTable</div>
    </Fragment>

  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProjectDetailView);
