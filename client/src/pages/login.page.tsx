import React from 'react';
import { Layout } from 'antd';
import LoginView from '../views/login.view';

const { Content } = Layout;

const LoginPage = (props) => {

  return (
    <LoginView windowSize={props.windowSize}/>
  );
};

export default LoginPage;

