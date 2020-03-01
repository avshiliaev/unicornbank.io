import React from 'react';
import {WrappedProjectsAdd} from '../containers/projects.add';
import {useMedia} from 'react-use-media';
import {Layout} from 'antd';
import FlexGridBasic from '../layout/flex.grid.basic';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';

const {Content} = Layout;

const ProjectNewContent = ({large}) => {

    return (
        <Content style={{padding: large ? 16 : 0}}>
            <FlexGridBasic
                large={large}
                slotOne={<div>subHeaderLarge</div>}
                slotTwo={<div>subSubHeaderLarge</div>}
                mainContent={<WrappedProjectsAdd/>}
            />
        </Content>
    )
};

const ProjctNewPage = ({large}) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic large={large}/>
            <ProjectNewContent large={large}/>
            <FooterBasic large={large}/>
        </Layout>
    )
};

export default ProjctNewPage;
