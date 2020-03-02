import React from 'react';
import FlexGridBasic from '../layout/flex.grid.basic';
import TasksTable from './tasks.table';
import FlexContainer from './flex.container';
import {Col, Row, Statistic} from 'antd';

const ProjectTitle = ({project}) => {
    return (
        <FlexContainer justify='center' align='center'>
            <h2>{project.title}</h2>
        </FlexContainer>
    )
};

const ProjectDescription = ({project}) => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Statistic title="Team: " value={project.workers.length}/>
            </Col>
            <Col span={8}>
                <Statistic title="Tasks: " value={project.tasks.length}/>
            </Col>
            <Col span={8}>
                <Statistic title="Topics: " value={project.tags.length}/>
            </Col>
        </Row>
    )
};

const ProjectDetailView = ({windowSize, project}) => {

    return (
        <FlexGridBasic
            windowSize={windowSize}
            slotOne={<ProjectTitle project={project}/>}
            slotTwo={<ProjectDescription project={project}/>}
            mainContent={<TasksTable tasks={project.tasks}/>}
        />
    )
};

export default ProjectDetailView;
