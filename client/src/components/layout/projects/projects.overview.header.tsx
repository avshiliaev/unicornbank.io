import React from 'react';
import {Layout, Menu} from 'antd';
import MobileDrawer from '../mobile.drawer';
import Logo from '../../logo';
import ProfileIcon from '../../profile.icon';

const {Header} = Layout;

const ProjectsOverviewHeader = ({large}) => {

    const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

    const HeaderMenu = ({large}) => {

        return (
            <Menu
                theme="light"
                mode={large ? 'horizontal' : 'inline'}
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">
                    <a href='/'>My projects</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href='/discover'>Discover</a>
                </Menu.Item>
            </Menu>
        )
    };

    return large
        ? (
            <Header style={
                {background: '#fff', paddingLeft: 16}
            }>
                <Logo/>
                <ProfileIcon/>
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
                    boxShadow: headerShadow,
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
