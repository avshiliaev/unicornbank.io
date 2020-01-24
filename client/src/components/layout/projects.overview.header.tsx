import React from 'react';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

const ProjectsOverviewHeader = ({large}) => {

    return large
        ? (
            <Header style={
                {background: '#fff', paddingLeft: 16}
            }>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">My projects</Menu.Item>
                    <Menu.Item key="2">Discover</Menu.Item>
                </Menu>
            </Header>
        )
        : (
            <Header style={
                {background: '#fff', paddingLeft: 16, position: 'fixed', zIndex: 1, width: '100%'}
            }>
                Mobile header
            </Header>
        )

};

export default ProjectsOverviewHeader;
