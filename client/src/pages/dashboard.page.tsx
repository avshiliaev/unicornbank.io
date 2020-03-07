import React, {Fragment} from 'react';
import {Router} from '@reach/router';
import {Avatar, Layout} from 'antd';
import HeaderBasic from '../components/layout/header.basic';
import ProjectsAllView from '../views/projects.all.view';
import DiscoverView from '../views/discover.view';
import ProjctAddView from '../views/projct.add.view';
import FooterBasic from '../components/layout/footer.basic';
import LogoIcon from '../components/logo.icon';
import HeaderMenu from '../components/header.menu';
import ProfileIcon from '../components/profile.icon';

const {Content} = Layout;

const DashboardPage = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic
                windowSize={props.windowSize}
                slotLeft={<Avatar size={30} style={{backgroundColor: '#fff'}} icon={<LogoIcon/>}/>}
                slotMiddle={<HeaderMenu windowSize={props.windowSize}/>}
                slotRight={<ProfileIcon size={30}/>}
            />
            <Layout>
                <Content style={{padding: props.windowSize.large ? 16 : 0}}>
                    <Router primary={false} component={Fragment}>
                        <ProjectsAllView path="/" windowSize={props.windowSize} userName={props.userName}/>
                        <DiscoverView path="discover" windowSize={props.windowSize} userName={props.userName}/>
                        <ProjctAddView path="new" windowSize={props.windowSize}/>
                    </Router>
                </Content>
                <FooterBasic windowSize={props.windowSize}/>
            </Layout>
        </Layout>
    )
};

export default DashboardPage;
