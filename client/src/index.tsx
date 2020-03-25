import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { connect, Provider } from 'react-redux';
import './index.css';
import App from './App';
import LoginPage from './pages/login.page';

const LoginGuard = ({ user }) => {
  return user.isLoggedIn
    ? <App/>
    : <LoginPage/>;
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
