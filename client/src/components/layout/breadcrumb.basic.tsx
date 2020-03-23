import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Location } from '@reach/router';

const BreadCrumbBasic = () => {
  return (
    <Location>
      {({ location }) => {
        const path = location.pathname.split('/');
        return (
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">
              <HomeOutlined/>
            </Breadcrumb.Item>
            {path.map(p => (<Breadcrumb.Item key={p}>{p}</Breadcrumb.Item>))}
          </Breadcrumb>
        );
      }}
    </Location>
  );
};

export default BreadCrumbBasic;
