import React, { useEffect } from 'react';
import { Avatar, Layout } from 'antd';
import SiderBasic from '../../components/layout/sider.basic';
import HeaderBasic from '../../components/layout/header.basic';
import LogoIcon from '../../components/logo.icon';
import HeaderMenu from '../../components/header.menu';
import { connect } from 'react-redux';
import ProfileIcon from '../../components/profile.icon';
import { getProject } from '../../reducers/project.reducer';
import ProjectSiderMenu from '../../components/project.sider.menu';
import BasicDrawer from '../../components/layout/drawer.basic';
import FooterBasic from '../../components/layout/footer.mobile';
import FooterMobile from '../../components/layout/footer.mobile';

const { Content } = Layout;

const ProjectPage = (props) => {

  const { windowSize, id, auth, children, getProject } = props;

  useEffect(() => {
    getProject(id);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={windowSize}
        slotLeft={
          windowSize.large
            ? <Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>
            : <BasicDrawer><ProjectSiderMenu/></BasicDrawer>
        }
        slotMiddle={<HeaderMenu windowSize={windowSize}/>}
        slotRight={<ProfileIcon id={auth.userId} size={30}/>}
      />
      <Layout>
        {
          windowSize.large
            ? <SiderBasic><ProjectSiderMenu/></SiderBasic>
            : <div/>
        }
        <Content style={{ padding: windowSize.large ? 16 : 0 }}>
          {children}
        </Content>
        {!windowSize.large && <FooterMobile auth={auth}/>}
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  getProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
