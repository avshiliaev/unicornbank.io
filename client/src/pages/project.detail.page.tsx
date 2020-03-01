import React from 'react';
import ProjectGet from '../containers/project.get';
import {Layout} from 'antd';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';

const {Content} = Layout;

const ProjectContent = ({id, large}) => {

    return (
        <Content style={{padding: large ? 16 : 0}}>
            <ProjectGet large={large} id={id}/>
        </Content>
    )
};

const ProjectDetail = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic large={props.large}/>
            <ProjectContent large={props.large} id={props.id}/>
            <FooterBasic large={props.large}/>
        </Layout>
    )
};

export default ProjectDetail;
