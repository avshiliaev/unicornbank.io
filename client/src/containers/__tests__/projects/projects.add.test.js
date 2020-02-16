import React from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {cleanup, fireEvent, renderApollo, waitForElement} from '../../../../test-utils';
import {ADD_PROJECTS} from "../../projects/projects.documents";
import {WrappedProjectsAdd} from "../../projects/projects.add";


describe('Projects Add Container', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error', () => {
        const {getByTestId} = renderApollo(<WrappedProjectsAdd/>);
        expect(getByTestId('add-button')).toBeTruthy();
    });

    it('fires correct mutation with variables', async () => {
        const cache = new InMemoryCache();

        // if we only provide 1 mock, any other queries would cause error
        let mocks = [
            {
                request: {
                    query: ADD_PROJECTS,
                    variables: {input: [{title: 'test project', description: 'test description'}]}
                },
                result: {
                    data: {
                        addProject: {
                            project: [{
                                id: "0x2",
                                title: "test project",
                                description: "test description",
                                tasks: [],
                                workers: [],
                                __typename: "Project"
                            }]
                        }
                    }
                }
            },
        ];

        const {getByTestId, container, debug} = renderApollo(
            <WrappedProjectsAdd/>,
            {
                mocks,
                cache,
                resolvers: {}
            },
        );
        fireEvent.click(getByTestId('add-button'));
        await waitForElement(() => getByTestId('add-button'));

        // mocks = [
        //   {
        //     request: {
        //       query: CANCEL_TRIP,
        //       variables: { launchId: 1 },
        //     },
        //     result: {
        //       data: {
        //         cancelTrip: {
        //           success: true,
        //           message: '',
        //           launches: [{ id: 1, isBooked: false }],
        //         },
        //       },
        //     },
        //   },
        // ];

        // renderApollo(<ActionButton id={1} isBooked={true} />, { mocks, container });
        // fireEvent.click(getByTestId('action-button'));
        // await waitForElement(() => getByTestId('action-button'));
    });
});
