import React from 'react';
import {Avatar, Col, Layout, Menu, Row} from 'antd';
import ProfileIcon from '../profile.icon';
import LogoIcon from '../logo.icon';
import DrawerMobile from './drawer.mobile';
import {NotificationOutlined} from '@ant-design/icons';

const {Header} = Layout;

const HeaderBasic = ({windowSize}) => {

    const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

    const HeaderMenu = ({windowSize}) => {

        return (
            <Menu
                theme="light"
                mode={windowSize.large ? 'horizontal' : 'inline'}
                defaultSelectedKeys={['1']}
                style={{
                    lineHeight: '61px',
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
            <Header style={{backgroundColor: '#fff', zIndex: 999, boxShadow: headerShadow}}>
                <Row align="middle" gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 0]}>
                    <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}>
                        <Row justify="start" align="middle" gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 0]}>
                            <Col>
                                <Avatar size={30} style={{backgroundColor: '#fff'}} icon={<LogoIcon/>}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={16} xl={16} xxl={16}>
                        <Row justify="start" align="middle" gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 0]}>
                            <Col>
                                <HeaderMenu windowSize={windowSize}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={6} xl={6} xxl={6}>
                        <Row justify="end" align="middle" gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 0]}>
                            <Col>
                                <Avatar size={30} icon={<NotificationOutlined/>}/>
                            </Col>
                            <Col>
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
                    zIndex: 999,
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
