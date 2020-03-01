import React from 'react';
import {Layout} from 'antd';
import ProjectsQuery from '../containers/projects.query';
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
                slotOne={<ProfileStatistics large={large}/>}
                slotTwo={<ProjectsAddBtn/>}
                mainContent={<ProjectsQuery large={large}/>}
            />
        </Content>
    )
};


const ProjectsPage = ({large}) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic large={large}/>
            <ProjectsOverviewContent large={large}/>
            <FooterBasic large={large}/>
        </Layout>
    )
};

export default ProjectsPage;
