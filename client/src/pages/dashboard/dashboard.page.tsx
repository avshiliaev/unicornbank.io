import React, { useEffect } from 'react';
import { Layout } from 'antd';
import HeaderBasic from '../../components/layout/header.basic';
import FooterMobile from '../../components/layout/footer.mobile';
import AppLogo from '../../components/logo.icon';
import { connect } from 'react-redux';
import ProfileIcon from '../../components/profile.icon';
import { initProjectsOverview } from '../../reducers/projects.overview.reducer';
import HeaderMenu from '../../components/header.menu';

const { Content } = Layout;

const DashboardPage = ({ windowSize, auth, initProjectsOverview, children, location, ...rest }) => {

  useEffect(() => {
    initProjectsOverview(auth.userId);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={windowSize}
        slotLeft={<AppLogo/>}
        slotMiddle={
          <HeaderMenu windowSize={windowSize} location={location}/>
        }
        slotRight={<ProfileIcon size={30} id={auth.userId}/>}
      />
      <Layout>
        <Content style={{ margin: windowSize.large ? 16 : 0 }}>
          {children}
        </Content>
        {!windowSize.large && <FooterMobile auth={auth} location={location}/>}
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    auth: state.auth,
    location: state.router.location,
  };
};

const mapDispatchToProps = {
  initProjectsOverview,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);

