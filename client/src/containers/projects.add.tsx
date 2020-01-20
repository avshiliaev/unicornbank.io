import React from 'react';
import {AddProjectComponent} from '../api/interfaces/types.d';
import ProjectsForm from '../components/projects.form';

const ProjectsAdd = () => {

    return (
        <AddProjectComponent>
            {(mutate, {loading, error}) => {
                if (loading) return (<div>Loading...</div>);
                if (error) return (<div>Error!</div>);
                return (
                    <ProjectsForm mutate={mutate}/>
                )
            }}
        </AddProjectComponent>
    )
};

export default ProjectsAdd;
