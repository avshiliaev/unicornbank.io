import React from 'react';
import {Layout} from 'antd';
import ProjectsAddBtn from '../components/projects.add.btn';
import ProfileStatistics from '../components/profile.statistics';
import FlexGridBasic from '../layout/flex.grid.basic';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';
import DiscoverQuery from '../containers/discover.query';

const {Content} = Layout;

const DiscoverOverviewContent = ({windowSize, userName}) => {

    return (
        <Content style={{padding: windowSize.large ? 16 : 0}}>
            <FlexGridBasic
                windowSize={windowSize}
                slotOne={<ProfileStatistics windowSize={windowSize} userName={userName}/>}
                slotTwo={<ProjectsAddBtn/>}
                mainContent={<DiscoverQuery windowSize={windowSize} userName={userName}/>}
            />
        </Content>
    )
};


const DiscoverPage = ({windowSize, userName}) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic windowSize={windowSize}/>
            <DiscoverOverviewContent windowSize={windowSize} userName={userName}/>
            <FooterBasic windowSize={windowSize}/>
        </Layout>
    )
};

export default DiscoverPage;
