import {
    AddWorkerInput,
    AddWorkerPayload,
    DeleteProjectPayload,
    DeleteWorkerPayload,
    GetProjectQueryVariables,
    Project,
    ProjectFilter,
    UpdateWorkerPayload,
    User,
    UserFilter,
    WorkerFilter
} from '../client/src/api/interfaces/types.d';

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
                workers {
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
                    workers {
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
                workers {
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

export const deleteProj = async (projId: string[], workerId: string[], url: string): Promise<DeleteProjectPayload> => {

    // While queries are executed in parallel, the mutation are triggered sequentially!
    const query = `
        mutation deleteProject(
            $workerFilter: WorkerFilter!, 
            $projectFilter: ProjectFilter!
        ){
          deleteWorker(filter: $workerFilter){
            msg
          }
          deleteProject(filter: $projectFilter){
            msg
          }
        }
    `;
    const workerFilter: WorkerFilter = {id: workerId};
    const projectFilter: ProjectFilter = {id: projId};
    return await gqlRequest.request(url, query, {workerFilter, projectFilter});
};

export const deleteWorker = async (workerId: string[], url: string): Promise<DeleteWorkerPayload> => {

    // Deleting worker is like deleting contract that connects a user with a project
    const query = `
        mutation ($workerFilter: WorkerFilter!){
          deleteWorker(filter: $workerFilter){
            msg
          }
        }
    `;
    const workerFilter: WorkerFilter = {id: workerId};
    return await gqlRequest.request(url, query, {workerFilter});
};

export const leaveWorkerSlot = async (
    userId: string[], workerId: string[], url: string
): Promise<UpdateWorkerPayload> => {

    // Delete links from both sides leaving the vacant place in a project:
    const query = `
        mutation($userFilter: UserFilter!, $workerFilter: WorkerFilter!) {
          updateUser(input: {
            filter: $userFilter,
            remove: { roles: [$workerFilter]}
          }) {
            user {
              id
            }
          }
          updateWorker(input: {
            filter: $workerFilter,
            remove: { user:  [$userFilter] }
          }) {
            worker {
              id
            }
          }
        }
    `;
    const userFilter: UserFilter = {id: userId};
    const workerFilter: WorkerFilter = {id: workerId};
    return await gqlRequest.request(url, query, {userFilter, workerFilter});
};

export const addWorker = async (addWorkerInput: AddWorkerInput[], url: string): Promise<AddWorkerPayload> => {
    const query = `
        mutation ($addWorkerInput: [AddWorkerInput]){
          addWorker(input: $addWorkerInput){
            worker {id}
          }
        }
    `;
    return await gqlRequest.request(url, query, {addWorkerInput});
};
