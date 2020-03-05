import React from 'react';
import {Button} from 'antd';

const ProjectsAddBtn = () => {
    return (
        <div>
            <Button block>
                <a href={'dashboard/new'}>Add project</a>
            </Button>
        </div>
    )
};

export default ProjectsAddBtn;
