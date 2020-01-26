import React from 'react';
import {Layout, Menu} from 'antd';
import MobileDrawer from '../mobile.drawer';

const {Header} = Layout;

const ProjectsOverviewHeader = ({large}) => {

    const HeaderMenu = ({large}) => {

        return (
            <Menu
                theme="light"
                mode={large ? 'horizontal' : 'inline'}
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">My projects</Menu.Item>
                <Menu.Item key="2">Discover</Menu.Item>
            </Menu>
        )
    };

    return large
        ? (
            <Header style={
                {background: '#fff', paddingLeft: 16}
            }>
                <HeaderMenu large={large}/>
            </Header>
        )
        : (
            <Header style={
                {
                    background: '#fff',
                    paddingLeft: 24,
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
                    height: '55px'
                }
            }>
                <MobileDrawer>
                    <HeaderMenu large={large}/>
                </MobileDrawer>
            </Header>
        )

};

export default ProjectsOverviewHeader;
