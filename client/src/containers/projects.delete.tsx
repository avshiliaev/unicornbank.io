import React from 'react';
import {DeleteProjectComponent} from '../api/interfaces/types.d';
import ProjectsDelButton from '../components/projects.del.button';

const ProjectsDelete = ({project}) => {

    return (
        <DeleteProjectComponent variables={{filter: {id: [project.id]}}}>
            {(mutate, {loading, error}) => {
                if (loading) return (<div>Loading...</div>);
                if (error) return (<div>Error!</div>);
                return (
                    <ProjectsDelButton mutate={mutate}/>
                )
            }}
        </DeleteProjectComponent>
    )
};

export default ProjectsDelete;
