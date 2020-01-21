import React from 'react';
import './projects.css';
import {Breadcrumb, Layout, Menu} from 'antd';
import ProjectsQuery from '../containers/projects.query';
import ProjectsAdd from '../containers/projects.add';

const {Header, Content, Footer} = Layout;

const ProjectsPage = () => {
    return (
        <Layout className="layout" style={{minHeight: '100vh'}}>
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>

                    <ProjectsAdd/>
                    <ProjectsQuery/>

                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Lagerist ©2020</Footer>
        </Layout>
    )
};

export default ProjectsPage;
