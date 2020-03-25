import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { connect, Provider } from 'react-redux';
import './index.css';
import App from './App';
import Login from './Login';

const LoginGuard = ({ user }) => {
  return user.isLoggedIn
    ? <App/>
    : <Login/>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const LoginGuardConnected = connect(mapStateToProps)(LoginGuard);

ReactDOM.render(
  <Provider store={store}>
    <LoginGuardConnected/>
  </Provider>,
  document.getElementById('root'),
);
