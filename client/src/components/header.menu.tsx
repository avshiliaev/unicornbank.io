import React from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';

const HeaderMenu = ({ windowSize }) => {

  return (
    <Menu
      theme="light"
      // mode={windowSize.large ? 'horizontal' : 'inline'}
      mode='horizontal'
      defaultSelectedKeys={['1']}
      style={{
        lineHeight: windowSize.large ? '61px' : '53px',
      }}
    >
      <Menu.Item key="1">
        <Link to="/dashboard/home">
          <span>My projects</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/dashboard/discover">
          <span>Discover</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderMenu;
