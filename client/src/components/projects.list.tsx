import React from 'react';
import { Avatar, Badge, Empty, List } from 'antd';
import ActionIcon from './action.icon';
import ProjectDeleteView from '../views/project.delete.view';
import { Project } from '../sdk/graphql-zeus';

const ProjectAvatar = ({ badgeNumber, text }) => {

  return (
    <Badge count={badgeNumber}>
      <Avatar style={{ backgroundColor: '#00a2ae' }}>{text}</Avatar>
    </Badge>
  );
};

const ProjectsList = ({ projects, windowSize }) => {

  console.log('render');

  if (projects.length === 0) {
    return (
      <Empty/>
    );
  }

  const projectsList: Project[] = projects;

  return (
    <List
      header={windowSize.large ? (<h4>Projects</h4>) : 'Projects'}
      itemLayout={!windowSize.large ? 'vertical' : 'horizontal'}
      dataSource={projectsList}
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
            windowSize.large ? <ProjectDeleteView project={project}/> : <div>Del</div>,
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
