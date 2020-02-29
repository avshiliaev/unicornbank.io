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
                subHeaderLarge={<div>subHeaderLarge</div>}
                subHeaderSmall={<div>subHeaderSmall</div>}
                subSubHeaderLarge={<div>subSubHeaderLarge</div>}
                subSubHeaderSmall={<div>subSubHeaderSmall</div>}
                mainContent={<WrappedProjectsAdd/>}
            />
        </Content>
    )
};

const ProjctNewPage = () => {

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
            <ProjectNewContent large={large}/>
            <FooterBasic large={large}/>
        </Layout>
    )
};

export default ProjctNewPage;
