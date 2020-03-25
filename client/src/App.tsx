import React from 'react';
import Pages from './pages';
import './App.css';
import LoginPage from './pages/login.page';
import { Location } from '@reach/router';
import { connect } from 'react-redux';

// https://github.com/reduxjs/react-redux/issues/159
const App = ({ user }) => {

  const IsLoggedIn = ({ location }) => {
    return user.isLoggedIn
      ? <Pages/>
      : <LoginPage path="login"/>;
  };

  return (
    <Location>
      {props => {
        return (<IsLoggedIn location={props.location.pathname}/>);
      }}
    </Location>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
