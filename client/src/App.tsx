import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import AppRoutes from './app.routes';

const App = ({ user }) => {
  return user.isLoggedIn
    ? <AppRoutes/>
    : <Login/>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
