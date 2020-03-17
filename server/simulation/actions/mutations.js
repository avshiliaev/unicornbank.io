"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gqlRequest = require('graphql-request');
exports.addProject = (addProjectInput, url) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        mutation ($addProjectInput: [AddProjectInput!]!){
          addProject(input: $addProjectInput){
            project{id}
          }
        }
    `;
    const payload = yield gqlRequest.request(url, query, { addProjectInput });
    return payload.addProject;
});
exports.addDeveloper = (addDeveloperInput, url) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        mutation ($addDeveloperInput: [AddDeveloperInput!]!){
          addDeveloper(input: $addDeveloperInput){
            developer {id}
          }
        }
    `;
    const payload = yield gqlRequest.request(url, query, { addDeveloperInput });
    return payload.addDeveloper;
});
exports.deleteProjClean = (projId, developerId, url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const developerFilter = { id: developerId };
    const projectFilter = { id: projId };
    return yield gqlRequest.request(url, query, { developerFilter, projectFilter });
});
exports.deleteProject = (projId, url) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        mutation ($projectFilter: ProjectFilter!){
          deleteProject(filter: $projectFilter){
            msg
          }
        }
    `;
    const projectFilter = { id: projId };
    return yield gqlRequest.request(url, query, { projectFilter });
});
exports.deleteDeveloper = (developerId, url) => __awaiter(void 0, void 0, void 0, function* () {
    // Deleting developer is like deleting contract that connects a user with a project
    const query = `
        mutation ($developerFilter: DeveloperFilter!){
          deleteDeveloper(filter: $developerFilter){
            msg
          }
        }
    `;
    const developerFilter = { id: developerId };
    return yield gqlRequest.request(url, query, { developerFilter });
});
exports.leaveDeveloperSlot = (userId, developerId, url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const userFilter = { id: userId };
    const developerFilter = { id: developerId };
    return yield gqlRequest.request(url, query, { userFilter, developerFilter });
});
