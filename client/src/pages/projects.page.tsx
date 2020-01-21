import React from 'react';
import {Layout} from 'antd';
import ProjectsAdd from '../containers/projects.add';
import ProjectsQuery from '../containers/projects.query';

const {Content, Footer, Header} = Layout;

const ProjectsPage = () => {
    return (

        <Layout>
            <Header>Header</Header>
            <Content style={{margin: '24px 16px 0', height: '100vh'}}>
                <h4>New project</h4>
                <ProjectsAdd/>
                <h4>All projects</h4>
                <ProjectsQuery/>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
};

export default ProjectsPage;
