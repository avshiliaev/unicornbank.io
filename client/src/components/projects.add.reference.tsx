import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

const ProjectsAddReference = (props) => {

  const {windowSize, userName} = props;

  return (
    <div>
      <Button block>
        <a href={'dashboard/new'}>Add project</a>
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProjectsAddReference);
