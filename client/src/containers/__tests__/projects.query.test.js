import React from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {cleanup, renderApollo, waitForElement,} from '../../../test-utils';
import {GET_PROJECTS} from '../projects.documents';
import ProjectsQuery from '../projects.query';

const mockProjects = {
    data: {
        queryProject: [{
            id: "0x3",
            title: "test project",
            description: "test project description",
            tasks: [],
            workers: [],
            __typename: "Project"
        }]
    }
};

describe('Projects Query Container', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders projects', async () => {
        const cache = new InMemoryCache({addTypename: false});
        const mocks = [
            {
                request: {query: GET_PROJECTS},
                result: mockProjects,
            },
        ];
        const {getAllByText} = await renderApollo(
            (<ProjectsQuery large={true}/>),
            {mocks, cache}
        );
        await waitForElement(() => getAllByText(/test project/i));
    });
});
