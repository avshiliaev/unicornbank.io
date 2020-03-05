import React from 'react';
import {Avatar, Col, Layout, Menu, Row} from 'antd';
import ProfileIcon from '../components/profile.icon';
import LogoIcon from '../components/logo.icon';
import DrawerMobile from './drawer.mobile';

const {Header} = Layout;

const HeaderBasic = ({windowSize}) => {

    const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

    const HeaderMenu = ({windowSize}) => {

        return (
            <Menu
                theme="dark"
                mode={windowSize.large ? 'horizontal' : 'inline'}
                defaultSelectedKeys={['1']}
                style={{
                    lineHeight: '64px',
                    paddingLeft: '50px',
                    // backgroundColor: 'blue'
                }}
            >
                <Menu.Item key="1">
                    <a href='/dashboard'>My projects</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href='/dashboard/discover'>Discover</a>
                </Menu.Item>
            </Menu>
        )
    };

    return windowSize.large
        ? (
            <Header >
                <Row align="middle">
                    <Col span={2}>
                        <Row justify="space-around" align="middle">
                            <Col span={8}>
                                <Avatar size={30} icon={<LogoIcon/>}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={20}>
                        <Row justify="start" align="middle">
                            <Col span={8}>
                                <HeaderMenu windowSize={windowSize}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={2}>
                        <Row justify="space-around" align="middle">
                            <Col span={8}>
                                <ProfileIcon size={30}/>
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
                    // paddingLeft: 24,
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                    boxShadow: headerShadow,
                    height: '55px'
                }
            }>
                <DrawerMobile>
                    <HeaderMenu windowSize={windowSize}/>
                </DrawerMobile>
            </Header>
        )

};

export default HeaderBasic;
