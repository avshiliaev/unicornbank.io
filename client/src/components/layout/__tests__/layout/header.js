import React from 'react';

import {cleanup, render} from '../../../../../test-utils';
import HeaderBasic from "../../projects.overview.header";

describe('Header', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error for desktop', () => {
        render(<HeaderBasic large={true}/>);
    });
    it('renders without error for mobile', () => {
        render(<HeaderBasic large={false}/>);
    });
});
