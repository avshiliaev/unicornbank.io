import React from 'react';
import { Layout, Menu } from 'antd';


const { Sider } = Layout;


const SiderBasic = ({children}) => {

  return (
    <Sider width={200}>
      {children}
    </Sider>
  );
};

export default SiderBasic;
