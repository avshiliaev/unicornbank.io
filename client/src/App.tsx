import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Pages from './pages';

const App = ({ user }) => {
  return user.isLoggedIn
    ? <Pages/>
    : <Login/>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
