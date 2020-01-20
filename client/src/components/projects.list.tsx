import React from 'react';
import {withDeleteProject} from '../api/interfaces/types.d';
import ProjectsDelete from '../containers/projects.delete';

const ProjectsList = ({data}) => {

    const onProjectClick = (project) => {
        const payload = withDeleteProject(project);
        console.log(payload);
    };

    return (
        <div>
            <ul>
                {data.queryProject.map(project => {
                    return (
                        <li key={project.id} onClick={() => onProjectClick(project)}>
                            <h5>Title: {project.title}</h5>
                            <h6>Tasks: {project.tasks.length}</h6>
                            <h6>Tags: {project.tags.length}</h6>
                            <ProjectsDelete project={project}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default ProjectsList;
