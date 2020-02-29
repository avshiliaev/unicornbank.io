import React from 'react';
import ProjectGet from '../containers/project.get';
import {useMedia} from 'react-use-media';
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
            <HeaderBasic large={large}/>
            <ProjectContent large={large} id={props.id}/>
            <FooterBasic large={large}/>
        </Layout>
    )
};

export default ProjectDetail;
