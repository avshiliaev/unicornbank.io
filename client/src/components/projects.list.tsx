import React from 'react';
import {Project} from '../api/interfaces/types.d';
import {Avatar, Empty, List} from 'antd';
import ProjectsDelete from '../containers/projects/projects.delete';
import ActionIcon from './action.icon';

const ProjectsList = ({projects}) => {

    if (projects.length === 0) {
        return (
            <Empty/>
        )
    }

    const projectsList: Project[] = projects;

    return (
        <List
            itemLayout="horizontal"
            dataSource={projectsList}
            renderItem={project => {
                const link = `/projects/${project.id}`;
                const ava = project.title.charAt(0);
                const openTasks = () => console.log('tasks');
                const numberTasks = `tasks: ${project.tasks.length}`;
                const openWorkers = () => console.log('workers');
                const numberWorkers = `team: ${project.workers.length}`;
                return (
                    <List.Item actions={[
                        <ActionIcon text={numberWorkers} type="team" action={openWorkers}/>,
                        <ActionIcon text={numberTasks} type="container" action={openTasks}/>,
                        <ProjectsDelete project={project}/>
                    ]}>
                        <List.Item.Meta
                            avatar={<Avatar>{ava}</Avatar>}
                            title={<a href={link}>{project.title}</a>}
                            description={numberTasks}
                        />
                    </List.Item>
                )
            }}
        />
    )
};

export default ProjectsList;
