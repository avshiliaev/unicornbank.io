import React, { Fragment } from 'react';
import { Avatar, Layout } from 'antd';
import SiderBasic from '../../components/layout/sider.basic';
import HeaderBasic from '../../components/layout/header.basic';
import LogoIcon from '../../components/logo.icon';
import HeaderMenu from '../../components/header.menu';
import ProjectHomeRoute from './routes/project.home.route';
import { Router } from '@reach/router';
import { connect } from 'react-redux';
import ProfileIcon from '../../components/profile.icon';

const { Content } = Layout;

const ProjectPage = (props) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={props.windowSize}
        slotLeft={<Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>}
        slotMiddle={<HeaderMenu windowSize={props.windowSize}/>}
        slotRight={<ProfileIcon id={props.user.userId} size={30}/>}
      />
      <Layout>
        {props.windowSize.large ? <SiderBasic/> : <div/>}
        <Content style={{ padding: props.windowSize.large ? 16 : 0 }}>
          <Router primary={false} component={Fragment}>
            <ProjectHomeRoute path='/' id={props.id}/>
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProjectPage);
