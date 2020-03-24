import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logOutAction } from './actions/login.actions';
import { connect } from 'react-redux';

const ProfileIconView = ({ size, logOutAction, user }) => {

  const onClick = () => {
    logOutAction();
    console.log(user)
  };

  return (
    <a onClick={() => onClick()}>
      <Avatar size={size} icon={<UserOutlined/>}/>
    </a>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logOutAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileIconView);
