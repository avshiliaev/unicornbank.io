import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const ProjctAddView = (props) => {

  const { windowSize } = props;

  return (
    <Fragment>
      <div>ProjectsForm</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProjctAddView);
