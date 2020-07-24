import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import HeaderBasic from '../../components/layout/header.basic';
import FooterMobile from '../../components/layout/footer.mobile';
import AppLogo from '../../components/logo.icon';
import ProfileIcon from '../../components/profile.icon';
import { initAccounts } from '../../reducers/accounts.overview.reducer';
import HeaderMenu from '../../components/header.menu';
import { initNotifications } from '../../reducers/notifications.reducer';

const { Content } = Layout;

const DashboardPage = ({ windowSize, auth, initAccounts, initNotifications, children, location, ...rest }) => {

  useEffect(() => {
    initAccounts(auth.userId);
    initNotifications(auth.userId);
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
  initAccounts,
  initNotifications,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardPage);

