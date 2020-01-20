import React from 'react';
import {AddProjectInput} from '../api/interfaces/types.d';

const ProjectsForm = ({mutate}) => {

    let field;
    const onSubmit = (e) => {
        e.preventDefault();
        const addProjectInputs: AddProjectInput[] = [{title: field.value}];
        mutate({variables: {input: addProjectInputs}, _typename: 'Project'});
        field.value = '';
    };

    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <input ref={node => { field = node }}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
};

export default ProjectsForm;
