import React from 'react';
import {WrappedProjectsAdd} from '../containers/projects.add';
import {Layout} from 'antd';
import FlexGridBasic from '../layout/flex.grid.basic';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';

const {Content} = Layout;

const ProjectNewContent = ({windowSize}) => {

    return (
        <Content style={{padding: windowSize.large ? 16 : 0}}>
            <FlexGridBasic
                windowSize={windowSize}
                slotOne={<div>subHeaderLarge</div>}
                slotTwo={<div>subSubHeaderLarge</div>}
                mainContent={<WrappedProjectsAdd/>}
            />
        </Content>
    )
};

const ProjctNewPage = ({windowSize}) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic windowSize={windowSize}/>
            <ProjectNewContent windowSize={windowSize}/>
            <FooterBasic windowSize={windowSize}/>
        </Layout>
    )
};

export default ProjctNewPage;
