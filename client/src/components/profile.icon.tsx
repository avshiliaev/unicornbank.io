import React from 'react';
import {Avatar} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';
import { UserOutlined } from '@ant-design/icons';


const ProfileIcon = ({size}) => {

    const client = useApolloClient();

    const onClick = async () => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
        // await localStorage.removeItem('token');
    };

    return (
        <a onClick={() => onClick()}>
            <Avatar size={size} icon={<UserOutlined />}/>
        </a>
    )
};

export default ProfileIcon;
