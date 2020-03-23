import React from 'react';
import { Menu } from 'antd';

const HeaderMenu = ({ windowSize }) => {

  return (
    <Menu
      theme="light"
      // mode={windowSize.large ? 'horizontal' : 'inline'}
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{
        lineHeight: '61px',
      }}
    >
      <Menu.Item key="1">
        <a href='/dashboard'>My projects</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href='/dashboard/discover'>Discover</a>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderMenu;
