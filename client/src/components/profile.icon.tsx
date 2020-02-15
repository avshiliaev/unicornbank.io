import React from 'react';
import CSS from 'csstype';
import {Avatar} from 'antd';


const ProfileIcon = () => {

    const upperBox: CSS.Properties = {
        // width: '50px',
        height: '31px',
        margin: '16px 24px 16px 0',
        float: 'right',
    };

    const innerBox: CSS.Properties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100%'
    };

    return (
        <div style={upperBox}>
            <div style={innerBox}>
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
            </div>
        </div>
    )
};

export default ProfileIcon;
