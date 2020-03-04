import React from 'react';
import {Avatar} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';


const ProfileIcon = ({size}) => {

    const client = useApolloClient();

    const onClick = async () => {
        client.writeData({ data: { isLoggedIn: false } });
        localStorage.clear();
        // await localStorage.removeItem('token');
    };

    return (
        <a onClick={() => onClick()}>
            <Avatar size={size} icon="user"/>
        </a>
    )
};

export default ProfileIcon;
