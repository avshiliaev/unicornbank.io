import React from 'react';
import {Col, Row} from 'antd';

const FlexGridBasic = ({windowSize, slotOne, slotTwo, mainContent}) => {
    return (
        <Row
            gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}
            type="flex"
            justify="space-around"
        >
            <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={4}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                    <Col>
                        <div style={{background: '#fff', padding: 24, marginTop: windowSize.large ? 'auto' : '64px'}}>
                            {slotOne}
                        </div>
                    </Col>
                </Row>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                    <Col>
                        <div style={{background: '#fff', padding: 24}}>
                            {slotTwo}
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={12}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                    <Col>
                        <div style={{background: '#fff', padding: 24}}>
                            <div>{mainContent}</div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={8}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                    <Col>
                        <div style={{background: '#fff', padding: 24}}>
                            <div>Right Column</div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default FlexGridBasic;
