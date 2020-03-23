import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Avatar, Layout } from 'antd';
import HeaderBasic from '../components/layout/header.basic';
import FooterBasic from '../components/layout/footer.basic';
import LogoIcon from '../components/logo.icon';
import HeaderMenu from '../components/header.menu';
import ProfileIcon from '../components/profile.icon';
import DashboardOverviewRoute from '../routes/dashboard.overview.route';
import DashboardDiscoverRoute from '../routes/dashboard.discover.route';
import DashboardNewRoute from '../routes/dashboard.new.route';

const { Content } = Layout;

const DashboardPage = (props) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={props.windowSize}
        slotLeft={<Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>}
        slotMiddle={<HeaderMenu windowSize={props.windowSize}/>}
        slotRight={<ProfileIcon size={30} onClick={() => console.log('clicked')}/>}
      />
      <Layout>
        <Content style={{ padding: props.windowSize.large ? 16 : 0 }}>
          <Router primary={false} component={Fragment}>
            <DashboardOverviewRoute path="/" windowSize={props.windowSize} userName={props.userName}/>
            <DashboardDiscoverRoute path="discover" windowSize={props.windowSize}
                                    userName={props.userName}/>
            <DashboardNewRoute path="new" windowSize={props.windowSize}/>
          </Router>
        </Content>
        <FooterBasic windowSize={props.windowSize}/>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
