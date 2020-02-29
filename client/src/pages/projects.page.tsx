import React from 'react';
import {Layout} from 'antd';
import ProjectsQuery from '../containers/projects.query';
import {useMedia} from 'react-use-media';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridBasic from '../layout/flex.grid.basic';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';

const {Content} = Layout;

const ProjectsOverviewContent = ({large}) => {

    return (
        <Content style={{padding: large ? 16 : 0}}>
            <FlexGridBasic
                large={large}
                subHeaderLarge={<ProfileStatistics large={large}/>}
                subHeaderSmall={<div/>}
                subSubHeaderLarge={<ProjectsAddBtn/>}
                subSubHeaderSmall={<ProfileStatistics large={large}/>}
                mainContent={<ProjectsQuery large={large}/>}
            />
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
            <HeaderBasic large={large}/>
            <ProjectsOverviewContent large={large}/>
            <FooterBasic large={large}/>
        </Layout>
    )
};

export default ProjectsPage;
