import React from 'react';
import {Avatar, Col, Row, Tag} from 'antd';
import FlexContainer from './flex.container';

const ProfileStatistics = ({large}) => {

    const Tags = () => {

        return (
            <div>
                <Tag style={{marginBottom: 6}}>backend</Tag>
                <Tag style={{marginBottom: 6}}>docker</Tag>
                <Tag style={{marginBottom: 6}}>frontend</Tag>
                <Tag style={{marginBottom: 6}}>oracle</Tag>
                <Tag style={{marginBottom: 6}}>graphql</Tag>
                <Tag style={{marginBottom: 6}}>nosql</Tag>
            </div>
        )
    };

    return (
        <Row type="flex">
            <Col
                xs={{span: 16, order: 2}}
                sm={{span: 16, order: 2}}
                md={{span: 6, order: 2}}
                lg={{span: 24, order: 1}}
                xl={{span: 24, order: 1}}
            >
                <FlexContainer justify={large ? 'center' : 'start'} align='center'>
                    <h2>John Smith</h2>
                </FlexContainer>
            </Col>
            <Col
                xs={{span: 4, order: 1}}
                sm={{span: 4, order: 1}}
                md={{span: 2, order: 1}}
                lg={{span: 24, order: 2}}
                xl={{span: 24, order: 2}}
            >
                <FlexContainer justify={large ? 'center' : 'start'} align='center'>
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        size={64}
                    />
                </FlexContainer>

            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} order={3}>
                <div style={{marginTop: 16}}>
                    {large ? (<h4>Skills</h4>) : (<div/>)}
                    <Tags/>
                </div>
            </Col>
        </Row>
    )
};

export default ProfileStatistics;
