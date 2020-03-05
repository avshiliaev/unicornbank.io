import React from 'react';
import {Layout} from 'antd';
import SiderBasic from '../layout/sider.basic';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';
import ProjectDetail from './project.detail.page';

const {Content} = Layout;

const ProjectRoute = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic windowSize={props.windowSize}/>
            <Layout>
                {props.windowSize.large ? <SiderBasic/> : <div/>}
                <Content style={{padding: props.windowSize.large ? 16 : 0}}>
                    <ProjectDetail windowSize={props.windowSize} id={props.id}/>
                </Content>
                <FooterBasic windowSize={props.windowSize}/>
            </Layout>
        </Layout>
    )
};

export default ProjectRoute;
