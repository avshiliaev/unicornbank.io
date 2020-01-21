import React from 'react';
import {Project} from '../api/interfaces/types.d';
import {Avatar, Empty, List} from 'antd';
import ProjectsDelete from '../containers/projects.delete';

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
                const descr = `tasks: ${project.tasks.length}`;
                return (
                    <List.Item actions={[<ProjectsDelete project={project}/>]}>
                        <List.Item.Meta
                            avatar={<Avatar>{ava}</Avatar>}
                            title={<a href={link}>{project.title}</a>}
                            description={descr}
                        />
                    </List.Item>
                )
            }}
        />
    )
};

export default ProjectsList;
