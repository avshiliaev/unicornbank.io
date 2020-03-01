import React from 'react';
import {Col, Layout, Menu, Row} from 'antd';
import ProfileIcon from '../components/profile.icon';
import LogoIcon from '../components/logo.icon';
import FlexContainer from '../components/flex.container';
import DrawerMobile from './drawer.mobile';

const {Header} = Layout;

const HeaderBasic = ({windowSize}) => {

    const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

    const HeaderMenu = ({windowSize}) => {

        return (
            <Menu
                theme="light"
                mode={windowSize.large ? 'horizontal' : 'inline'}
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

    return windowSize.large
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
                        <HeaderMenu windowSize={windowSize}/>
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
                <DrawerMobile>
                    <HeaderMenu windowSize={windowSize}/>
                </DrawerMobile>
            </Header>
        )

};

export default HeaderBasic;
