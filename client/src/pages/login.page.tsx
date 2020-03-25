import React from 'react';
import LoginView from '../views/login.view';
import { connect } from 'react-redux';

const LoginPage = ({ windowSize }) => {

  return (
    <LoginView windowSize={windowSize}/>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
  };
};

export default connect(mapStateToProps)(LoginPage);

