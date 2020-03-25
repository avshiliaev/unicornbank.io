import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const DiscoverView = (props) => {

  const {windowSize} = props;

  return (
    <Fragment>
      <div>ProjectsList</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(DiscoverView);
