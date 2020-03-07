import React from 'react';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';


const ProfileIcon = ({size, onClick}) => {

    return (
        <a onClick={() => onClick()}>
            <Avatar size={size} icon={<UserOutlined/>}/>
        </a>
    )
};

export default ProfileIcon;
