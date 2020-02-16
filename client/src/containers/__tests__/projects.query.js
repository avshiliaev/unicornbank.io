import React from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {cleanup, renderApollo, waitForElement,} from '../../../test-utils';
import {GET_PROJECTS} from '../projects/projects.documents';
import ProjectsQuery from '../projects/projects.query';

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
    }, extensions: {requestID: "a3b86875-70d2-4dea-a548-045c436eeccb"}
};

describe('Launches Page', () => {
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
