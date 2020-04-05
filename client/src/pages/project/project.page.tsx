import React, { useEffect } from 'react';
import { Avatar, Layout } from 'antd';
import SiderBasic from '../../components/layout/sider.basic';
import HeaderBasic from '../../components/layout/header.basic';
import LogoIcon from '../../components/logo.icon';
import HeaderMenu from '../../components/header.menu';
import { connect } from 'react-redux';
import ProfileIcon from '../../components/profile.icon';
import ProjectSiderMenu from '../../components/project.sider.menu';
import { getProject } from '../../reducers/project.reducer';
import UserSiderMenu from '../../components/user.sider.menu';

const { Content } = Layout;

const ProjectPage = (props) => {

  const { windowSize, id, auth, children, getProject, stars } = props;

  useEffect(() => {
    getProject(id);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={windowSize}
        slotLeft={<Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>}
        slotMiddle={<HeaderMenu windowSize={windowSize}/>}
        slotRight={<ProfileIcon id={auth.userId} size={30}/>}
      />
      <Layout>
        {windowSize.large ? <SiderBasic><UserSiderMenu/></SiderBasic> : <div/>}
        <Content style={{ padding: windowSize.large ? 16 : 0 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    auth: state.auth,
    stars: state.stars
  };
};

const mapDispatchToProps = {
  getProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
