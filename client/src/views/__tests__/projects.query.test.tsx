import React from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {cleanup, renderApollo, waitForElement,} from '../../../test-utils';
import ProjectsAllView from "../projects.all.view";
import {GET_PROJECTS_OF_USER} from '../docs/projects.documents';

const mockProjects = {
    data: {
        queryUser: [
            {
                id: "0x9",
                roles: [
                    {
                        project: {
                            id: "0xa",
                            title: "test project",
                            description: "test proj description",
                            tasks: [],
                            workers: [
                                {
                                    "id": "0xb"
                                },
                                {
                                    "id": "0x18"
                                },
                                {
                                    "id": "0x1a"
                                }
                            ],
                            __typename: "Project"
                        }
                    }
                ]
            }
        ]
    }
};

describe('Projects Query Container', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders projects and writes into cache: ', async () => {

        const userName = 'testUser';

        const cache = new InMemoryCache({addTypename: false});
        const mocks = [
            {
                request: {query: GET_PROJECTS_OF_USER, variables: {filter: {username: {eq: userName}}}},
                result: mockProjects,
            },
        ];
        const {getAllByText} = await renderApollo(
            (<ProjectsAllView windowSize={{large: true}} userName={userName}/>),
            {mocks, cache, resolvers: {}, addTypename: true, defaultOptions: {}}
        );
        await waitForElement(() => getAllByText(/test project/i));
        expect(Object.keys(cache.extract()).length).toBeGreaterThan(0)
    });
});
