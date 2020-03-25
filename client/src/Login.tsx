import React from 'react';
import { connect } from 'react-redux';
import { UserState } from './reducers/user.reducer';
import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import FlexContainer from './components/layout/flex.container';
import { logInAction } from './views/actions/login.actions';

const { Content } = Layout;

const Login = (props) => {

  const { windowSize, logInAction } = props;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async (values) => {
    const state: UserState = { userName: values.username, isLoggedIn: true };
    logInAction(state);
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

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
  };
};

const mapDispatchToProps = {
  logInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

