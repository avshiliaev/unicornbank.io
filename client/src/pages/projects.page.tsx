import React from 'react';
import {Button, Col, Layout, Row} from 'antd';
import ProjectsQuery from '../containers/projects/projects.query';
import ProjectsOverviewHeader from '../components/layout/projects.overview.header';
import ProjectsOverviewFooter from '../components/layout/projects.overview.footer';
import {WrappedProjectsAdd} from '../containers/projects/projects.add';
import {useMedia} from 'react-use-media';

const {Content} = Layout;

const ProjectsAddSmall = () => {
    return (
        <div>
            <Button type="primary" block>
                Add project
            </Button>
        </div>
    )
};

const ProjectsOverviewContent = () => {

    const breakpoints = {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
    };
    const large = useMedia({
        minWidth: breakpoints.lg,
    });

    return (
        <Content style={{padding: large ? 16 : 0}}>
            <Row
                gutter={
                    [
                        {xs: 0, sm: 0, md: 0, lg: 16},
                        {xs: 0, sm: 0, md: 0, lg: 16}
                    ]
                }
                type="flex"
                justify="space-around"
            >
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div style={{background: '#fff', padding: 24, minHeight: 100}}>
                        {large
                            ? (<WrappedProjectsAdd/>)
                            : (<ProjectsAddSmall/>)
                        }
                    </div>
                </Col>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                        <ProjectsQuery/>
                    </div>
                </Col>
            </Row>
        </Content>
    )
};


const ProjectsPage = () => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <ProjectsOverviewHeader/>
            <ProjectsOverviewContent/>
            <ProjectsOverviewFooter/>
        </Layout>
    )
};

export default ProjectsPage;
