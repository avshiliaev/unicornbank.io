import React from 'react';
import {Button, Col, Layout, Row} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';
import FlexContainer from '../components/flex.container';

const {Content} = Layout;

const LoginPage = ({windowSize}) => {

    const client = useApolloClient();

    const onClick = async () => {
        client.writeData({data: {isLoggedIn: true, userName: 'hisuperhi'}});
        await localStorage.setItem('token', 'awesomeToken');
        await localStorage.setItem('username', 'hisuperhi');
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Content style={{padding: windowSize.large ? 16 : 0}}>
                <Row
                    gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}
                    align="middle"
                    justify="center"
                    style={{minHeight: '100vh'}}
                >
                    <Col xs={24} sm={24} md={18} lg={8} xl={6} xxl={6}>
                        <div style={{background: '#fff', padding: 24}}>
                            <FlexContainer justify={'center'} align={'center'}>
                                Please Log In
                            </FlexContainer>
                            <br/>
                            <FlexContainer justify={'center'} align={'center'}>
                                <Button onClick={() => onClick()}>Login</Button>
                            </FlexContainer>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
};

export default LoginPage;

