import React from 'react';
import { Col, Row } from 'antd';
import FlexContainer from '../components/layout/flex.container';
import ProfileIconView from './profile.icon.view';
import { connect } from 'react-redux';

const ProfileStatisticsView = (props) => {

  const { windowSize, user } = props;

  const Tags = () => {

    return (
      <div>
        Some user info
      </div>
    );
  };

  return (
    <Row>
      <Col
        xs={{ span: 16, order: 2 }}
        sm={{ span: 16, order: 2 }}
        md={{ span: 6, order: 2 }}
        lg={{ span: 24, order: 1 }}
        xl={{ span: 24, order: 1 }}
      >
        <FlexContainer justify={windowSize.large ? 'center' : 'start'} align='center'>
          <h2 style={{ paddingLeft: 16, paddingRight: 16 }}>{user.userName}</h2>
        </FlexContainer>
      </Col>
      <Col
        xs={{ span: 6, order: 1 }}
        sm={{ span: 4, order: 1 }}
        md={{ span: 4, order: 1 }}
        lg={{ span: 24, order: 2 }}
        xl={{ span: 24, order: 2 }}
      >
        <FlexContainer justify={windowSize.large ? 'center' : 'start'} align='center'>
          <ProfileIconView size={64}/>
        </FlexContainer>

      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} order={3}>
        <div style={{ marginTop: 16 }}>
          {windowSize.large ? (<h4>Skills</h4>) : (<div/>)}
          <Tags/>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize.greaterThan,
    user: state.user,
  };
};

export default connect(mapStateToProps)(ProfileStatisticsView);
