import React from 'react';
import {Project} from '../api/interfaces/types.d';
import {Avatar, Empty, List} from 'antd';
import ProjectsDelete from '../containers/projects/projects.delete';
import ActionIcon from './action.icon';
import {useMedia} from 'react-use-media';

const ProjectsList = ({projects}) => {

    const large = useMedia({
        minWidth: 1024,
    });

    if (projects.length === 0) {
        return (
            <Empty/>
        )
    }

    const projectsList: Project[] = projects;

    return (
        <List
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
                        large? <ProjectsDelete project={project}/> : <div>Del</div>
                    ]}>
                        <List.Item.Meta
                            avatar={<Avatar>{ava}</Avatar>}
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
