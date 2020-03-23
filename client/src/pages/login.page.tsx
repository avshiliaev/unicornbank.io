import React from 'react';
import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import { useApolloClient } from '@apollo/react-hooks';
import FlexContainer from '../components/layout/flex.container';

const { Content } = Layout;

const LoginPage = ({ windowSize }) => {

  const client = useApolloClient();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async (values) => {
    client.writeData({ data: { isLoggedIn: true, userName: values.username } });
    await localStorage.setItem('token', 'awesomeToken');
    await localStorage.setItem('username', values.username);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: windowSize.large ? 16 : 0 }}>
        <Row
          gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 24]}
          align="middle"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Col xs={24} sm={24} md={18} lg={8} xl={6} xxl={6}>
            <div style={{ background: '#fff', padding: 24 }}>
              <FlexContainer justify={'center'} align={'center'}>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input/>
                  </Form.Item>

                  <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </FlexContainer>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LoginPage;

