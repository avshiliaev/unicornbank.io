import React from 'react';
import {WrappedProjectsAdd} from '../containers/projects/projects.add';
import {flexCenter} from '../JSXStyles';

const NewProjectPage = () => {

    return (
        <div style={flexCenter}>
            <WrappedProjectsAdd/>
        </div>

    )
};

export default NewProjectPage;
