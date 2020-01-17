import React from 'react';

const ProjectsList = ({data}) => {

    const onProjectClick = (project) => {
        console.log(project)
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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default ProjectsList;
