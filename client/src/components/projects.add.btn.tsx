import React from 'react';
import {Button} from 'antd';

const ProjectsAddBtn = () => {
    return (
        <div>
            <Button block>
                <a href={'projects/new'}>Add project</a>
            </Button>
        </div>
    )
};

export default ProjectsAddBtn;
