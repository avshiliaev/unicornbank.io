import React from 'react';
import {BackTop, Col, Layout, Row} from 'antd';
import ProjectsQuery from '../containers/projects/projects.query';
import ProjectsOverviewHeader from '../components/layout/projects.overview.header';
import ProjectsOverviewFooter from '../components/layout/projects.overview.footer';
import {useMedia} from 'react-use-media';
import ProjectsAddBtn from '../components/projects.add.btn';
import {flexCenter} from '../JSXStyles';

const {Header, Content} = Layout;

const Profile = ({large}) => {

    return(
        <div style={flexCenter}>
            {large ? 'Profile big' : 'Profile small'}
        </div>
    )
};

const MobileToolbar = () => {

    return(
        <Header style={{background: '#fff', padding: 0}}>
            Mobile header
        </Header>
    )
};

const ProjectsOverviewContent = ({large}) => {

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
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Row
                        gutter={{xs: 0, sm: 0, md: 0, lg: 16}}
                    >
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                {large ? <Profile large={large}/> : (<MobileToolbar/>)}
                            </div>
                        </Col>
                    </Row>
                    <Row
                        gutter={{xs: 0, sm: 0, md: 0, lg: 16}}
                    >
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                {large ? <ProjectsAddBtn/> : <Profile large={large}/>}
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
            {large ? <ProjectsOverviewHeader/> : (<div></div>)}
            <ProjectsOverviewContent large={large}/>
            {large ? <ProjectsOverviewFooter/> : <BackTop/>}
        </Layout>
    )
};

export default ProjectsPage;
