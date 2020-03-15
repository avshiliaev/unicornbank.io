import {
    AddProjectInput,
    AddWorkerInput,
    DeleteProjectPayload,
    DeleteWorkerPayload,
    Project,
    ProjectFilter,
    UpdateWorkerPayload,
    UserFilter,
    WorkerFilter
} from '../../../client/src/api/interfaces/types.d';

const gqlRequest = require('graphql-request');

export const addProject = async (addProjectInput: AddProjectInput[], url: string): Promise<Project> => {
    const query = `
        mutation ($addProjectInput: [AddProjectInput!]!){
          addProject(input: $addProjectInput){
            project{id}
          }
        }
    `;
    const payload = await gqlRequest.request(url, query, {addProjectInput});
    return payload.addProject;
};


export const addWorker = async (addWorkerInput: AddWorkerInput[], url: string): Promise<Worker> => {
    const query = `
        mutation ($addWorkerInput: [AddWorkerInput!]!){
          addWorker(input: $addWorkerInput){
            worker {id}
          }
        }
    `;
    const payload = await gqlRequest.request(url, query, {addWorkerInput});
    return payload.addWorker;
};

export const deleteProjClean = async (projId: string[], workerId: string[], url: string): Promise<DeleteProjectPayload> => {

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

export const deleteProject = async (projId: string[], url: string): Promise<DeleteProjectPayload> => {

    const query = `
        mutation ($projectFilter: ProjectFilter!){
          deleteProject(filter: $projectFilter){
            msg
          }
        }
    `;
    const projectFilter: ProjectFilter = {id: projId};
    return await gqlRequest.request(url, query, {projectFilter});
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



