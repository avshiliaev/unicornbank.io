import React from 'react';
import {Col, Layout, Menu, Row} from 'antd';
import MobileDrawer from './mobile.drawer';
import ProfileIcon from '../components/profile.icon';
import LogoIcon from '../components/logo.icon';
import FlexContainer from '../components/flex.container';

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
                <Row type="flex" justify="space-around" align="middle">
                    <Col span={2}>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={16}>
                                <FlexContainer justify={'flex-start'} align={'center'}>
                                    <LogoIcon/>
                                </FlexContainer>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <HeaderMenu large={large}/>
                    </Col>
                    <Col span={14}>
                        <Row type="flex" justify="end">
                            <Col span={2}>
                                <FlexContainer justify={'flex-end'} align={'center'}>
                                    <ProfileIcon size={30}/>
                                </FlexContainer>
                            </Col>
                        </Row>
                    </Col>
                </Row>
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
