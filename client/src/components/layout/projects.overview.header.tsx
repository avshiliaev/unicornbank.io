import React from 'react';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

const ProjectsOverviewHeader = () => {
    return (
        <Header style={{background: '#fff'}}>
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
};

export default ProjectsOverviewHeader;
