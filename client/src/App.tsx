import React, { useEffect } from 'react';
import Pages from './pages';
import './App.css';
import LoginPage from './pages/login.page';
import { connect } from 'react-redux';
import { initProjectsDev } from './views/actions/project.actions';

// https://github.com/reduxjs/react-redux/issues/159
const App = ({ user, initProjectsDev }) => {

  useEffect(() => {
    user.isLoggedIn
      ? initProjectsDev(user.userName)
      : console.log('not logged in');
  }, []);

  return user.isLoggedIn
    ? <Pages/>
    : <LoginPage path="login"/>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  initProjectsDev,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
