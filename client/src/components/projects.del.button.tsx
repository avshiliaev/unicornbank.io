import React from 'react';

const ProjectsDelButton = ({mutate, variables}) => {

    return (
        <div>
            <button onClick={() => mutate({variables})}>Delete</button>
        </div>
    )
};

export default ProjectsDelButton;

