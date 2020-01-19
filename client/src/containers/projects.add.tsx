import React from 'react';
import {AddProjectComponent} from '../api/interfaces/types.d';

const ProjectsAdd = () => {

    // const input: AddProjectInput[] = [{title: 'ffffffff'}];
    let field;

    return (
        <AddProjectComponent>
            {(mutate, {loading, error}) => (
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            mutate({variables: {input: [{title: field.value}]}});
                            field.value = '';
                        }}
                    >
                        <input
                            ref={node => {
                                field = node;
                            }}
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>
            )}
        </AddProjectComponent>
    )
};

export default ProjectsAdd;
