import React from 'react';
import {Col, Row} from 'antd';
import BreadCrumbBasic from './breadcrumb.basic';

const FlexGridProject = ({windowSize, slotOne, slotTwo}) => {

    return (
        <Row
            gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 16]}
            justify="start"
        >
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <BreadCrumbBasic/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={18} xxl={16}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 0]} justify="start">
                    <Col span={24}>
                        <div style={{background: '#fff', padding: 24, marginTop: windowSize.large ? 'auto' : '64px'}}>
                            {slotOne}
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={6} xxl={8}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 0]} justify="start">
                    <Col span={24}>
                        <div style={{background: '#fff', padding: 24}}>
                            {slotTwo}
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default FlexGridProject;
