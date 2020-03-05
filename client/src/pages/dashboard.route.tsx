import React, {Fragment} from 'react';
import {Router} from '@reach/router';
import {Layout} from 'antd';
import HeaderBasic from '../layout/header.basic';
import ProjectsPage from './projects.page';
import DiscoverPage from './discover.page';
import ProjctNewPage from './projct.new.page';
import FooterBasic from '../layout/footer.basic';

const {Content} = Layout;

const DashboardRoute = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic windowSize={props.windowSize}/>
            <Layout>
                <Content style={{padding: props.windowSize.large ? 16 : 0}}>
                    <Router primary={false} component={Fragment}>
                        <ProjectsPage path="/" windowSize={props.windowSize} userName={props.userName}/>
                        <DiscoverPage path="discover" windowSize={props.windowSize} userName={props.userName}/>
                        <ProjctNewPage path="new" windowSize={props.windowSize}/>
                    </Router>
                </Content>
                <FooterBasic windowSize={props.windowSize}/>
            </Layout>
        </Layout>
    )
};

export default DashboardRoute;
