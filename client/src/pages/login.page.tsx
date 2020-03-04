import React from 'react';
import {Button, Col, Layout, Row} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';

const {Content} = Layout;

const LoginPage = ({windowSize}) => {

    const client = useApolloClient();

    const onClick = async () => {
        client.writeData({ data: { isLoggedIn: true } });
        await localStorage.setItem('token', 'awesomeToken');
        // await navigate('/')
    };

    return (
        <Content style={{padding: windowSize.large ? 16 : 0, height: '100vh', width: '100vh'}}>
            <Row
                gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}
                type="flex"
                justify="center"
            >
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                <Button onClick={() => onClick()}>Login</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Content>
    )
};

export default LoginPage;

