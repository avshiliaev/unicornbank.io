import React from 'react';
import {WrappedProjectsAdd} from '../containers/projects/projects.add';
import {useMedia} from 'react-use-media';
import {Col, Layout, Row} from 'antd';
import ProjectsOverviewHeader from '../components/layout/projects/projects.overview.header';
import ProjectsOverviewFooter from '../components/layout/projects/projects.overview.footer';

const {Content} = Layout;

const ProjectNewContent = ({large}) => {

    return (
        <Content style={{padding: large ? 16 : 0}}>
            <Row
                gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}
                type="flex"
                justify="space-around"
            >
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                {large ? (<div>Large</div>) : (<div/>)}
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                        <Col>
                            <div style={{background: '#fff', padding: 24}}>
                                {large ? (<div>Large</div>): (<div>Small</div>)}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <div style={{background: '#fff', padding: 24}}>
                        <WrappedProjectsAdd/>
                    </div>
                </Col>
            </Row>
        </Content>
    )
};

const ProjctNewPage = () => {

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
            <ProjectNewContent large={large}/>
            <ProjectsOverviewFooter large={large}/>
        </Layout>
    )
};

export default ProjctNewPage;
