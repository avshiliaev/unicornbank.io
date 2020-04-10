import React, { useState } from 'react';
import { Avatar, Badge, Button, Col, List, Row, Select } from 'antd';
import ActionIcon from './action.icon';
import { ProjectsOverviewState } from '../reducers/projects.overview.reducer';
import { Link } from '@reach/router';
import { CodeOutlined, FundProjectionScreenOutlined, StarOutlined } from '@ant-design/icons';

const { Option } = Select;

const Selector = ({ onClick, windowSize, numbers }) => {

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
        <Row justify={windowSize.small ? 'end' : 'center'} align="middle" gutter={16}>
          <Col>
            <Button shape="round" onClick={() => onClick('all')}>all</Button>
          </Col>
          <Col>
            <Button shape="circle" icon={<CodeOutlined/>} onClick={() => onClick('asDeveloper')}/>
          </Col>
          <Col>
            <Button shape="circle" icon={<FundProjectionScreenOutlined/>} onClick={() => onClick('asHost')}/>
          </Col>
          <Col>
            <Button shape="circle" icon={<StarOutlined/>} onClick={() => onClick('starred')}/>
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

  const [toDisplay, setToDisplay] = useState('all');

  return (
    <div>
      <Selector windowSize={windowSize} numbers={numbers} onClick={setToDisplay}/>
      <List
        itemLayout={!windowSize.large ? 'vertical' : 'horizontal'}
        dataSource={
          toDisplay === 'asDeveloper' ? projectsState.asDeveloper :
            toDisplay === 'asHost' ? projectsState.asHost :
              toDisplay === 'starred' ? projectsState.starred :
                toDisplay === 'all' && [
                  ...projectsState.asDeveloper,
                  ...projectsState.asHost,
                  ...projectsState.starred,
                ]
        }
        renderItem={project => {
          const link = `/project/${project.id}/home`;
          const ava = project.title.charAt(0);
          const openEntities = () => console.log('entities');
          const numberEntities = `entities: ${project.entities.length}`;
          const openWorkers = () => console.log('developers');
          const numberWorkers = `team: ${project.developers.length}`;
          return (
            <List.Item actions={[
              <ActionIcon text={numberWorkers} action={openWorkers}/>,
              <ActionIcon text={numberEntities} action={openEntities}/>,
              <div>Del</div>,
            ]}>
              <List.Item.Meta
                avatar={<ProjectAvatar text={ava} badgeNumber={project.entities.length}/>}
                title={<Link to={link}>{project.title}</Link>}
                description={project.description}
              />
            </List.Item>
          );
        }}
      />
    </div>

  );
};

export default ProjectsList;
