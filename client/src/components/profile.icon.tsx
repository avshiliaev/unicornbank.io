import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ProfileIcon = ({ size, id }) => {

  const link = `/user/${id}`;

  return (
    <a href={link}>
      <Avatar size={size} icon={<UserOutlined/>}/>
    </a>
  );
};

export default ProfileIcon;
