import React from 'react';
import { Col, Row } from 'antd';

const FlexGridDashboard = ({ windowSize, slotOne, slotTwo, mainContent }) => {
  return (
    <Row
      gutter={[{ xs: 0, sm: 16, md: 16, lg: 16 }, 16]}
      justify="start"
    >
      <Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={4}>
        <Row
          gutter={
            [
              { xs: 0, sm: 16, md: 16, lg: 16 },
              { xs: 0, sm: 0, md: 0, lg: 16 },
            ]
          }
          justify="start"
        >
          <Col xs={24} sm={12} md={12} lg={24} xl={24} xxl={24}>
            <div style={{ background: '#fff', padding: 24, marginTop: windowSize.large ? 'auto' : '64px' }}>
              {slotOne}
            </div>
          </Col>
          <Col xs={0} sm={12} md={12} lg={24} xl={24} xxl={24}>
            <div style={{ background: '#fff', padding: 24, marginTop: windowSize.large ? 'auto' : '64px' }}>
              {slotTwo}
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={12}>
        <Row
          gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}
          justify="start"
        >
          <Col span={24}>
            <div style={{ background: '#fff', padding: 24 }}>
              <div>{mainContent}</div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={8}>
        <Row gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]} justify="start">
          <Col span={24}>
            <div style={{ background: '#fff', padding: 24 }}>
              <div>Right Column</div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FlexGridDashboard;
