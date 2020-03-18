import {Project} from '../../../../server_/api/interfaces/types.d';

const gqlRequest = require('graphql-request');

export const queryProjects = async (url: string): Promise<Project[]> => {
    const query = `
        query {
            queryProject{
                id
                title
                description
                tasks {
                    id
                }
                developers {
                  id
                  availability
                  user {username}
                }
                __typename
            }
        }
    `;
    const payload = await gqlRequest.request(url, query);
    return payload.queryProject
};
