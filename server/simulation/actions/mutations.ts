import {
    AddProjectInput,
    AddDeveloperInput,
    DeleteProjectPayload,
    DeleteDeveloperPayload,
    Project,
    ProjectFilter,
    UpdateDeveloperPayload,
    UserFilter,
    DeveloperFilter, Developer
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


export const addDeveloper = async (addDeveloperInput: AddDeveloperInput[], url: string): Promise<Developer> => {
    const query = `
        mutation ($addDeveloperInput: [AddDeveloperInput!]!){
          addDeveloper(input: $addDeveloperInput){
            developer {id}
          }
        }
    `;
    const payload = await gqlRequest.request(url, query, {addDeveloperInput});
    return payload.addDeveloper;
};

export const deleteProjClean = async (projId: string[], developerId: string[], url: string): Promise<DeleteProjectPayload> => {

    // While queries are executed in parallel, the mutation are triggered sequentially!
    const query = `
        mutation deleteProject(
            $developerFilter: DeveloperFilter!, 
            $projectFilter: ProjectFilter!
        ){
          deleteDeveloper(filter: $developerFilter){
            msg
          }
          deleteProject(filter: $projectFilter){
            msg
          }
        }
    `;
    const developerFilter: DeveloperFilter = {id: developerId};
    const projectFilter: ProjectFilter = {id: projId};
    return await gqlRequest.request(url, query, {developerFilter, projectFilter});
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

export const deleteDeveloper = async (developerId: string[], url: string): Promise<DeleteDeveloperPayload> => {

    // Deleting developer is like deleting contract that connects a user with a project
    const query = `
        mutation ($developerFilter: DeveloperFilter!){
          deleteDeveloper(filter: $developerFilter){
            msg
          }
        }
    `;
    const developerFilter: DeveloperFilter = {id: developerId};
    return await gqlRequest.request(url, query, {developerFilter});
};

export const leaveDeveloperSlot = async (
    userId: string[], developerId: string[], url: string
): Promise<UpdateDeveloperPayload> => {

    // Delete links from both sides leaving the vacant place in a project:
    const query = `
        mutation($userFilter: UserFilter!, $developerFilter: DeveloperFilter!) {
          updateUser(input: {
            filter: $userFilter,
            remove: { roles: [$developerFilter]}
          }) {
            user {
              id
            }
          }
          updateDeveloper(input: {
            filter: $developerFilter,
            remove: { user:  [$userFilter] }
          }) {
            developer {
              id
            }
          }
        }
    `;
    const userFilter: UserFilter = {id: userId};
    const developerFilter: DeveloperFilter = {id: developerId};
    return await gqlRequest.request(url, query, {userFilter, developerFilter});
};



