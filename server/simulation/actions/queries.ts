import {GetProjectQueryVariables, Project, User, UserFilter} from '../../../client/src/api/interfaces/types.d';

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

export const getAllRolesByUser = async (username: string, url: string): Promise<User[]> => {
    const query = `
        query getByName($filter: UserFilter!){
          queryUser(filter: $filter) {
            id
            roles {
              id
              availability
              project{
                    id
                    title
                    description
                    tasks {
                        id
                    }
                    developers {
                        id
                    }
                    __typename
              }
            }
          }
        }
    `;
    const variables: UserFilter = {username: {eq: username}};
    const payload = await gqlRequest.request(url, query, {filter: variables});
    return payload.queryUser
};

export const getProjectById = async (projId: string, url: string): Promise<Project> => {
    const query = `
        query getProject($id: ID!){
            getProject(id: $id) {
                id
                title
                __typename
                tags {
                    id
                    title
                    __typename
                }
                tasks {
                    id
                    title
                    content
                    __typename
                }
                developers {
                    id
                    name
                    __typename
                }
            }
        }
    `;
    const variables: GetProjectQueryVariables = {id: projId};
    const payload = await gqlRequest.request(url, query, variables);
    return payload.getProject
};
