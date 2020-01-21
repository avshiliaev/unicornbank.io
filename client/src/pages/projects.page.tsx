import React from 'react';
import {Col, Layout, Menu, Row} from 'antd';
import ProjectsQuery from '../containers/projects.query';
import {WrappedProjectsAdd} from '../containers/projects.add';

const {Header, Content, Footer} = Layout;

const ProjectsPage = () => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">My projects</Menu.Item>
                    <Menu.Item key="2">Discover</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '50px'}}>
                <Row>
                    <Col span={8}>
                        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                            <WrappedProjectsAdd/>
                        </div>

                    </Col>
                    <Col span={16}>
                        <div style={{background: '#fff', padding: 24, minHeight: 280, marginLeft: '50px'}}>
                            <ProjectsQuery/>
                        </div>
                    </Col>
                </Row>

            </Content>
            <Footer style={{textAlign: 'center'}}>Lagerist ©2020</Footer>
        </Layout>
    )
};

export default ProjectsPage;
