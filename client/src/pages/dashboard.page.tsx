import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Avatar, Layout } from 'antd';
import HeaderBasic from '../components/layout/header.basic';
import FooterBasic from '../components/layout/footer.basic';
import LogoIcon from '../components/logo.icon';
import HeaderMenu from '../components/header.menu';
import DashboardOverviewRoute from '../routes/dashboard.overview.route';
import DashboardDiscoverRoute from '../routes/dashboard.discover.route';
import DashboardNewRoute from '../routes/dashboard.new.route';
import { connect } from 'react-redux';
import ProfileIcon from '../components/profile.icon';

const { Content } = Layout;

const DashboardPage = ({ windowSize, path, user }) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={windowSize}
        slotLeft={<Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>}
        slotMiddle={<HeaderMenu windowSize={windowSize}/>}
        slotRight={<ProfileIcon size={30} id={user.userId}/>}
      />
      <Layout>
        <Content style={{ margin: windowSize.large ? 16 : 0 }}>
          <Router primary={false} component={Fragment}>
            <DashboardOverviewRoute windowSize={windowSize} path="/"/>
            <DashboardDiscoverRoute windowSize={windowSize} path="discover"/>
            <DashboardNewRoute windowSize={windowSize} path="new"/>
          </Router>
        </Content>
        <FooterBasic windowSize={windowSize}/>
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

export default connect(mapStateToProps)(DashboardPage);
