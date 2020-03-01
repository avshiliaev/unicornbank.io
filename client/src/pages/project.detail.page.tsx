import React from 'react';
import ProjectGet from '../containers/project.get';
import {Layout} from 'antd';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';

const {Content} = Layout;

const ProjectContent = ({id, windowSize}) => {

    return (
        <Content style={{padding: windowSize.large ? 16 : 0}}>
            <ProjectGet windowSize={windowSize} id={id}/>
        </Content>
    )
};

const ProjectDetail = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic windowSize={props.windowSize}/>
            <ProjectContent windowSize={props.windowSize} id={props.id}/>
            <FooterBasic windowSize={props.windowSize}/>
        </Layout>
    )
};

export default ProjectDetail;
