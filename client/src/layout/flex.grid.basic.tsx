import React from 'react';
import {Col, Row} from 'antd';

const FlexGridBasic = ({large, slotOne, slotTwo, mainContent}) => {
    return (
        <Row
            gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}
            type="flex"
            justify="space-around"
        >
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                    <Col>
                        <div style={{background: '#fff', padding: 24, marginTop: large ? 'auto' : '64px'}}>
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
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <Row gutter={[{xs: 0, sm: 0, md: 0, lg: 16}, 24]}>
                    <Col>
                        <div style={{background: '#fff', padding: 24}}>
                            <div>{mainContent}</div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default FlexGridBasic;
