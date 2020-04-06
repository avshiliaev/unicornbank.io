import React from 'react';
import { Avatar, Layout } from 'antd';
import SiderBasic from '../../components/layout/sider.basic';
import HeaderBasic from '../../components/layout/header.basic';
import LogoIcon from '../../components/logo.icon';
import HeaderMenu from '../../components/header.menu';
import { connect } from 'react-redux';
import ProfileIcon from '../../components/profile.icon';
import UserSiderMenu from '../../components/user.sider.menu';
import { getUser } from '../../reducers/user.reducer';
import BasicDrawer from '../../components/layout/drawer.basic';
import FooterMobile from '../../components/layout/footer.mobile';

const { Content } = Layout;

const UserPage = (props) => {

  const { windowSize, auth, getUser, children, location, id } = props;

  getUser(id);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderBasic
        windowSize={windowSize}
        slotLeft={
          windowSize.large
            ? <Avatar size={30} style={{ backgroundColor: '#fff' }} icon={<LogoIcon/>}/>
            : <BasicDrawer><UserSiderMenu/></BasicDrawer>
        }
        slotMiddle={<HeaderMenu windowSize={windowSize}/>}
        slotRight={<ProfileIcon id={auth.userId} size={30}/>}
      />
      <Layout>
        {
          windowSize.large
            ? <SiderBasic><UserSiderMenu/></SiderBasic>
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
    location: state.router,
  };
};

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
