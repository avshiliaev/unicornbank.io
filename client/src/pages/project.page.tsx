import React from 'react';
import {Avatar, Layout} from 'antd';
import SiderBasic from '../components/layout/sider.basic';
import HeaderBasic from '../components/layout/header.basic';
import LogoIcon from '../components/logo.icon';
import HeaderMenu from '../components/header.menu';
import ProfileIcon from '../components/profile.icon';
import ProjectHomeRoute from '../routes/project.home.route';

const {Content} = Layout;

const ProjectPage = (props) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <HeaderBasic
                windowSize={props.windowSize}
                slotLeft={<Avatar size={30} style={{backgroundColor: '#fff'}} icon={<LogoIcon/>}/>}
                slotMiddle={<HeaderMenu windowSize={props.windowSize}/>}
                slotRight={<ProfileIcon size={30} onClick={() => console.log('clicked')}/>}
            />
            <Layout>
                {props.windowSize.large ? <SiderBasic/> : <div/>}
                <Content style={{padding: props.windowSize.large ? 16 : 0}}>
                    <ProjectHomeRoute windowSize={props.windowSize} id={props.id}/>
                </Content>
            </Layout>
        </Layout>
    )
};

export default ProjectPage;
