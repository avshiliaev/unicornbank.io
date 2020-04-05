import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import AppRoutes from './app.routes';
import { getStars } from './reducers/stars.reducer';

const App = ({ auth, getStars }) => {

  const createApp = () => {
    getStars(auth.userId);
    return <AppRoutes/>;
  };

  return auth.isLoggedIn
    ? createApp()
    : <Login/>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  getStars,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
