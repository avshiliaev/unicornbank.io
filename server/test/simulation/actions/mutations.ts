import {
    AddProjectInput,
    AddUserInput,
    DeleteProjectPayload,
    Project,
    ProjectFilter,
    User
} from '../../../../server_/api/interfaces/types.d';

const gqlRequest = require('graphql-request');

export const addUser = async (addUserInput: AddUserInput[], url: string): Promise<User[]> => {
    const query = `
        mutation ($addUserInput: [AddUserInput!]!){
          addUser(input: $addUserInput){
            user{id}
          }
        }
    `;
    const payload = await gqlRequest.request(url, query, {addUserInput});
    return payload.addUser.user;
};

export const addProject = async (addProjectInput: AddProjectInput[], url: string): Promise<Project[]> => {
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
