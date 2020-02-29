import React from 'react';
import {Project} from '../api/interfaces/types.d';
import {Avatar, Badge, Empty, List} from 'antd';
import ProjectsDelete from '../containers/projects.delete';
import ActionIcon from './action.icon';

const ProjectAvatar = ({text}) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    return (
        <Badge count={getRandomInt(6)}>
            <Avatar style={{backgroundColor: colorList[getRandomInt(4)]}}>{text}</Avatar>
        </Badge>
    )
};

const ProjectsList = ({projects, large}) => {

    if (projects.length === 0) {
        return (
            <Empty/>
        )
    }

    const projectsList: Project[] = projects;

    return (
        <List
            header={large ? (<h4>Projects</h4>) : 'Projects'}
            itemLayout={!large ? "vertical" : 'horizontal'}
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
                        large ? <ProjectsDelete project={project}/> : <div>Del</div>
                    ]}>
                        <List.Item.Meta
                            avatar={<ProjectAvatar text={ava}/>}
                            title={<a href={link}>{project.title}</a>}
                            description={project.description}
                        />
                    </List.Item>
                )
            }}
        />
    )
};

export default ProjectsList;
