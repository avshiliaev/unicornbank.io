import React from 'react';
import {Layout} from 'antd';
import SiderBasic from '../components/layout/sider.basic';
import HeaderBasic from '../components/layout/header.basic';
import FooterBasic from '../components/layout/footer.basic';
import ProjectDetail from '../views/project.detail.view';

const {Content} = Layout;

const ProjectPage = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic windowSize={props.windowSize}/>
            <Layout>
                {props.windowSize.large ? <SiderBasic/> : <div/>}
                <Content style={{padding: props.windowSize.large ? 16 : 0}}>
                    <ProjectDetail windowSize={props.windowSize} id={props.id}/>
                    <FooterBasic windowSize={props.windowSize}/>
                </Content>
            </Layout>
        </Layout>
    )
};

export default ProjectPage;
