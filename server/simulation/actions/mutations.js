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
exports.addWorker = (addWorkerInput, url) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        mutation ($addWorkerInput: [AddWorkerInput!]!){
          addWorker(input: $addWorkerInput){
            worker {id}
          }
        }
    `;
    const payload = yield gqlRequest.request(url, query, { addWorkerInput });
    return payload.addWorker;
});
exports.deleteProjClean = (projId, workerId, url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const workerFilter = { id: workerId };
    const projectFilter = { id: projId };
    return yield gqlRequest.request(url, query, { workerFilter, projectFilter });
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
exports.deleteWorker = (workerId, url) => __awaiter(void 0, void 0, void 0, function* () {
    // Deleting worker is like deleting contract that connects a user with a project
    const query = `
        mutation ($workerFilter: WorkerFilter!){
          deleteWorker(filter: $workerFilter){
            msg
          }
        }
    `;
    const workerFilter = { id: workerId };
    return yield gqlRequest.request(url, query, { workerFilter });
});
exports.leaveWorkerSlot = (userId, workerId, url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const userFilter = { id: userId };
    const workerFilter = { id: workerId };
    return yield gqlRequest.request(url, query, { userFilter, workerFilter });
});
