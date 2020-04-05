import React, { useState } from 'react';
import { Avatar, Badge, Col, List, Radio, Row, Select } from 'antd';
import ActionIcon from './action.icon';
import { ProjectsOverviewState } from '../reducers/projects.overview.reducer';
import { Link } from '@reach/router';

const { Option } = Select;

const Selector = ({ onChange, windowSize, numbers }) => {

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
              size="small"
              defaultValue={'asDeveloper'}
              onChange={(event) => onChange(event.target.value)}>
              <Radio.Button value="asDeveloper">Developer: {numbers.asDeveloper}</Radio.Button>
              <Radio.Button value="asHost">Maintainer: {numbers.asHost}</Radio.Button>
              <Radio.Button value="starred">Starred: {numbers.starred}</Radio.Button>
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

const ProjectsList = ({ projectsOverview, windowSize }) => {

  const projectsState: ProjectsOverviewState = projectsOverview;
  const numbers = {
    asDeveloper: projectsState.asDeveloper.length,
    asHost: projectsState.asHost.length,
    starred: projectsState.starred.length,
  };

  const [toDisplay, setToDisplay] = useState('asDeveloper');

  return (
    <List
      header={<Selector windowSize={windowSize} numbers={numbers} onChange={(val) => setToDisplay(val)}/>}
      itemLayout={!windowSize.large ? 'vertical' : 'horizontal'}
      dataSource={
        toDisplay === 'asDeveloper' ? projectsState.asDeveloper :
          toDisplay === 'asHost' ? projectsState.asHost :
            toDisplay === 'starred' && projectsState.starred
      }
      renderItem={project => {
        const link = `/project/${project.id}/home`;
        const ava = project.title.charAt(0);
        const openTasks = () => console.log('tasks');
        const numberTasks = `tasks: ${project.tasks.length}`;
        const openWorkers = () => console.log('developers');
        const numberWorkers = `team: ${project.developers.length}`;
        return (
          <List.Item actions={[
            <ActionIcon text={numberWorkers} action={openWorkers}/>,
            <ActionIcon text={numberTasks} action={openTasks}/>,
            <div>Del</div>,
          ]}>
            <List.Item.Meta
              avatar={<ProjectAvatar text={ava} badgeNumber={project.tasks.length}/>}
              title={<Link to={link}>{project.title}</Link>}
              description={project.description}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default ProjectsList;
