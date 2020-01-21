import React from 'react';
import {Layout, Menu} from 'antd';
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
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '50px'}}>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                    <WrappedProjectsAdd/>
                    <ProjectsQuery/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Lagerist ©2020</Footer>
        </Layout>
    )
};

export default ProjectsPage;
