import React from 'react';
import { Col, Layout, Row } from 'antd';

const { Header } = Layout;

const HeaderBasic = ({ windowSize, slotLeft, slotMiddle, slotRight }) => {

  const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

  return windowSize.large
    ? (
      <Header style={{ backgroundColor: '#fff', zIndex: 999, boxShadow: headerShadow }}>
        <Row align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
          <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}>
            <Row justify="start" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
              <Col>
                {slotLeft}
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={0} lg={16} xl={16} xxl={16}>
            <Row justify="start" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
              <Col>
                {slotMiddle}
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6} xl={6} xxl={6}>
            <Row justify="end" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
              <Col>
                {slotRight}
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    )
    : (
      <Header style={
        {
          background: '#fff',
          position: 'fixed',
          zIndex: 999,
          width: '100%',
          boxShadow: headerShadow,
          height: '55px',
        }
      }>
        <Row align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
          <Col span={24}>
            <Row justify="center" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
              <Col>
                {slotMiddle}
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    );

};

export default HeaderBasic;
