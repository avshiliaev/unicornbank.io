import React from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {cleanup, fireEvent, renderApollo, waitForElement} from '../../../test-utils';
import ProjectsForm from '../../components/projects.form';
import {ADD_PROJECTS} from '../docs/projects.documents';

describe('Projects Add Container', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    const mutate = () => console.log('CREATE');

    it('renders without error', () => {
        const {getByTestId} = renderApollo(<ProjectsForm mutate={mutate}/>);
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
            <ProjectsForm mutate={mutate}/>,
            {
                mocks,
                cache,
                resolvers: {},
                addTypename: true,
                defaultOptions: {}
            },
        );
        fireEvent.click(getByTestId('add-button'));
        await waitForElement(() => getByTestId('add-button'));

        // {"data":{"deleteProject":{"msg":"Deleted"}},"extensions":{"requestID":"48c2d4ca-8ee2-46fe-8108-39070b3553a4"}}
    });
});
