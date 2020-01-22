import React from 'react';
import {Icon} from 'antd';

const ActionIcon = ({type, text, action}) => {
    return (
        <div onClick={() => action()}>
            <span>
                <Icon type={type} style={{marginRight: 8}}/>
                {text}
            </span>
        </div>
    )
};

export default ActionIcon;
