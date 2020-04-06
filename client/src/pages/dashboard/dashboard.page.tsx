import React, { useEffect } from 'react';
import { Avatar, Layout } from 'antd';
import HeaderBasic from '../../components/layout/header.basic';
import FooterMobile from '../../components/layout/footer.mobile';
import LogoIcon from '../../components/logo.icon';
import HeaderMenu from '../../components/header.menu';
import { connect } from 'react-redux';
import ProfileIcon from '../../components/profile.icon';
import { initProjectsOverview } from '../../reducers/projects.overview.reducer';

const { Content } = Layout;

const DashboardPage = ({ windowSize, auth, initProjectsOverview, children, ...rest }) => {

  useEffect(() => {
    initProjectsOverview(auth.userId);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={windowSize}
        slotLeft={<Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>}
        slotMiddle={<HeaderMenu windowSize={windowSize}/>}
        slotRight={<ProfileIcon size={30} id={auth.userId}/>}
      />
      <Layout>
        <Content style={{ margin: windowSize.large ? 16 : 0 }}>
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
  initProjectsOverview,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);

