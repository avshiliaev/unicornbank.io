import React, {Fragment} from 'react';
import {RouteComponentProps, Router} from '@reach/router';
import ProjectsPage from './projects.page';
import ProjectDetail from './project.detail.page';
import ProjctNewPage from './projct.new.page';
import DiscoverPage from './discover.page';
import {Layout} from 'antd';
import HeaderBasic from '../layout/header.basic';
import FooterBasic from '../layout/footer.basic';
import SiderBasic from '../layout/sider.basic';

const {Content} = Layout;

const Pages = ({windowSize, userName}) => {
    const RouterPage = (
        props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <Layout style={{minHeight: '100vh'}}>
            {windowSize.large ? <SiderBasic/> : <div/>}

            <Layout>
                <HeaderBasic windowSize={windowSize}/>
                <Content style={{padding: windowSize.large ? 16 : 0}}>
                    <Router primary={false} component={Fragment}>
                        <RouterPage path="/"
                                    pageComponent={<ProjectsPage windowSize={windowSize} userName={userName}/>}/>
                        <RouterPage path="/discover"
                                    pageComponent={<DiscoverPage windowSize={windowSize} userName={userName}/>}/>
                        <RouterPage path="/projects/new" pageComponent={<ProjctNewPage windowSize={windowSize}/>}/>
                        <ProjectDetail windowSize={windowSize} path="/projects/:id"/>
                    </Router>
                </Content>
                <FooterBasic windowSize={windowSize}/>
            </Layout>

        </Layout>
    );
};

export default Pages;
