import React from 'react';
import CSS from 'csstype';
import {Icon} from 'antd';

const Logo = () => {

    const upperBox: CSS.Properties = {
        width: '50px',
        height: '31px',
        background: 'rgba(255, 255, 255, 0.2)',
        margin: '16px 24px 16px 0',
        float: 'left',
    };

    const innerBox: CSS.Properties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100%'
    };

    const styleIcon: CSS.Properties = {
        fontSize: '18px',
        color: '#08c'
    };

    return (
        <div style={upperBox}>
            <div style={innerBox}>
                <Icon
                    type="deployment-unit"
                    theme="outlined"
                    style={styleIcon}/>
            </div>
        </div>


    )
};

export default Logo;
