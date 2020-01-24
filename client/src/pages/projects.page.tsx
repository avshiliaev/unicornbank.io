import React from 'react';
import {Col, Layout, Row} from 'antd';
import ProjectsQuery from '../containers/projects/projects.query';
import ProjectsOverviewHeader from '../components/layout/projects.overview.header';
import ProjectsOverviewFooter from '../components/layout/projects.overview.footer';
import {useMedia} from 'react-use-media';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';

const {Content} = Layout;

const ProjectsOverviewContent = ({large}) => {

    return (
        <Content style={{padding: large ? 16 : 0}}>
            <Row
                gutter={
                    [
                        {xs: 0, sm: 0, md: 0, lg: 16},
                        {xs: 16, sm: 16, md: 16, lg: 16}
                    ]
                }
                type="flex"
                justify="space-around"
            >
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Row
                        gutter={
                            [
                                {xs: 0, sm: 0, md: 0, lg: 16},
                                {xs: 24, sm: 24, md: 24, lg: 24}
                            ]
                        }
                    >
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                {large ? <ProfileStatistics large={large}/> : (<div/>)}
                            </div>
                        </Col>
                    </Row>
                    <Row
                        gutter={
                            [
                                {xs: 0, sm: 0, md: 0, lg: 16},
                                {xs: 24, sm: 24, md: 24, lg: 24}
                            ]
                        }
                    >
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                {large ? <ProjectsAddBtn/> : <ProfileStatistics large={large}/>}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <div style={{background: '#fff', padding: 24}}>
                        <ProjectsQuery large={large}/>
                    </div>
                </Col>
            </Row>
        </Content>
    )
};


const ProjectsPage = () => {

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
        <Layout style={{minHeight: '100vh'}}>
            <ProjectsOverviewHeader large={large}/>
            <ProjectsOverviewContent large={large}/>
            <ProjectsOverviewFooter large={large}/>
        </Layout>
    )
};

export default ProjectsPage;
