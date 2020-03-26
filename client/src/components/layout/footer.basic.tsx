import React from 'react';
import { BackTop, Col, Layout, Row } from 'antd';
import { ContainerTwoTone, MessageOutlined, PieChartOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const StickyFooter = () => {

  const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

  return (
    <Footer style={
      {
        background: '#fff',
        position: 'sticky',
        bottom: '0',
        boxShadow: headerShadow,
        paddingBottom: '24px',
      }
    }>
      <Row align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
        <Col span={8}>
          <Row justify="center" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
            <Col>
              <ContainerTwoTone style={{ fontSize: '24px' }}/>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="center" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
            <Col>
              <MessageOutlined style={{ fontSize: '24px' }}/>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="center" align="middle" gutter={[{ xs: 0, sm: 0, md: 0, lg: 16 }, 0]}>
            <Col>
              <PieChartOutlined style={{ fontSize: '24px' }}/>
            </Col>
          </Row>
        </Col>
      </Row>
      <BackTop/>
    </Footer>
  );
};

const FooterBasic = ({ windowSize }) => {
  return windowSize.large
    ? (
      <Footer style={{ textAlign: 'center' }}>Lagerist ©2020</Footer>
    )
    : (
      <StickyFooter/>
    );
};

export default FooterBasic;
