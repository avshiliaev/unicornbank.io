import React from 'react';
import { Button } from 'antd';
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
                <Button htmlType="submit" size="small">Add Project</Button>
            </form>
        </div>
    )
};

export default ProjectsForm;
