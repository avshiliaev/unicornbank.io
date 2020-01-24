import React from 'react';
import {flexCenter} from '../JSXStyles';
import {Avatar, Tag} from 'antd';

const ProfileStatistics = ({large}) => {

    const style = large ? flexCenter : {};

    return (
        <div style={style}>
            <Avatar shape="square" size={64} icon="user" style={{backgroundColor: '#87d068'}}/>
            <div>
                <h4 style={{margin: 6}}>Skills:</h4>
                <div>
                    <Tag color="green" style={{margin: 6}}>backend</Tag>
                    <Tag color="blue" style={{margin: 6}}>docker</Tag>
                    <Tag color="volcano" style={{margin: 6}}>frontend</Tag>
                    <Tag color="orange" style={{margin: 6}}>oracle</Tag>
                    <Tag color="gold" style={{margin: 6}}>graphql</Tag>
                    <Tag color="purple" style={{margin: 6}}>nosql</Tag>
                </div>
            </div>
        </div>
    )
};

export default ProfileStatistics;
