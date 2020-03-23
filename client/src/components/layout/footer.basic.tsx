import React from 'react';
import { BackTop, Layout } from 'antd';

const { Footer } = Layout;

const FooterBasic = ({ windowSize }) => {
  return windowSize.large
    ? (
      <Footer style={{ textAlign: 'center' }}>Lagerist ©2020</Footer>
    )
    : (
      <div>
        <br/>
        <br/>
        <BackTop/>
      </div>
    );
};

export default FooterBasic;
