import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';


const { Sider } = Layout;


const SiderBasic = ({children}) => {

  return (
    <Sider width={200} style={{background: '#fff',}}>
      {children}
    </Sider>
  );
};

export default SiderBasic;
