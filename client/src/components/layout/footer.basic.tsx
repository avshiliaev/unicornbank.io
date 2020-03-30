import React from 'react';
import CSS from 'csstype';
import { BackTop, Col, Layout, Row } from 'antd';
import { ContainerTwoTone, MessageOutlined, UserOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const StickyFooter = () => {

  const headerShadow = '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)';

  const footerHeight = 56;
  const iconSize = 24;
  const paddingTop = Math.floor((footerHeight - iconSize) / 2);
  const iconStyles: CSS.Properties = { fontSize: `${iconSize}px` };

  return (
    <Footer style={
      {
        background: '#fff',
        position: 'sticky',
        bottom: '0',
        boxShadow: headerShadow,
        height: `${footerHeight}px`,
        paddingTop: `${paddingTop}px`,
      }
    }>
      <Row align="middle">
        <Col span={8}>
          <Row justify="start" align="middle">
            <Col>
              <ContainerTwoTone style={iconStyles}/>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="center" align="middle">
            <Col>
              <MessageOutlined style={iconStyles}/>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="end" align="middle">
            <Col>
              <UserOutlined style={iconStyles}/>
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
