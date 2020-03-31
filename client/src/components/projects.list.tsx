import React, { useState } from 'react';
import { Avatar, Badge, Col, List, Radio, Row, Select } from 'antd';
import ActionIcon from './action.icon';
import { ProjectState } from '../reducers/project.reducer';

const { Option } = Select;

const Selector = ({ onChange, windowSize, numbers }) => {

  const opened = () => {
    return numbers.asDeveloper >= numbers.asHost
      ? 'asDeveloper'
      : 'asHost';
  };

  return (
    <Row
      gutter={[0, 16]}
      justify="start"
    >
      <Col xs={0} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Row justify="start" align="middle">
          <Col>
            <h4>Projects</h4>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Row justify={windowSize.small ? 'end' : 'center'} align="middle">
          <Col>
            <Radio.Group
              defaultValue={'asDeveloper'}
              onChange={(event) => onChange(event.target.value)}>
              <Radio.Button value="asDeveloper">Developer: {numbers.asDeveloper}</Radio.Button>
              <Radio.Button value="asHost">Maintainer: {numbers.asHost}</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const ProjectAvatar = ({ badgeNumber, text }) => {

  return (
    <Badge count={badgeNumber}>
      <Avatar style={{ backgroundColor: '#00a2ae' }}>{text}</Avatar>
    </Badge>
  );
};

const ProjectsList = ({ projects, windowSize }) => {

  const projectsState: ProjectState = projects;
  const numbers = {
    asDeveloper: projectsState.asDeveloper.length,
    asHost: projectsState.asHost.length,
  };

  const [toDisplay, setToDisplay] = useState('asDeveloper');

  return (
    <List
      header={<Selector windowSize={windowSize} numbers={numbers} onChange={(val) => setToDisplay(val)}/>}
      itemLayout={!windowSize.large ? 'vertical' : 'horizontal'}
      dataSource={toDisplay === 'asDeveloper' ? projectsState.asDeveloper : projectsState.asHost}
      renderItem={project => {
        const link = `/project/${project.id}`;
        const ava = project.title.charAt(0);
        const openTasks = () => console.log('tasks');
        const numberTasks = `tasks: ${project.tasks.length}`;
        const openWorkers = () => console.log('developers');
        const numberWorkers = `team: ${project.developers.length}`;
        return (
          <List.Item actions={[
            <ActionIcon text={numberWorkers} type="team" action={openWorkers}/>,
            <ActionIcon text={numberTasks} type="container" action={openTasks}/>,
            <div>Del</div>,
          ]}>
            <List.Item.Meta
              avatar={<ProjectAvatar text={ava} badgeNumber={project.tasks.length}/>}
              title={<a href={link}>{project.title}</a>}
              description={project.description}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default ProjectsList;
