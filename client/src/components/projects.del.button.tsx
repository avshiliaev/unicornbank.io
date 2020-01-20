import React from 'react';

const ProjectsDelButton = ({mutate}) => {

    return (
        <div>
            <button onClick={() => mutate()}>Delete</button>
        </div>
    )
};

export default ProjectsDelButton;

