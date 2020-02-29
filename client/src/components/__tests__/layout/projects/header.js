import React from 'react';

import {cleanup, render} from '../../../../../test-utils';
import ProjectsOverviewHeader from "../../../layout/projects.overview.header";

describe('Header', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error for desktop', () => {
        render(<ProjectsOverviewHeader large={true}/>);
    });
    it('renders without error for mobile', () => {
        render(<ProjectsOverviewHeader large={false}/>);
    });
});
