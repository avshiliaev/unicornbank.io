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
exports.queryProjects = (url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const payload = yield gqlRequest.request(url, query);
    return payload.queryProject;
});
exports.getAllRolesByUser = (username, url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const variables = { username: { eq: username } };
    const payload = yield gqlRequest.request(url, query, { filter: variables });
    return payload.queryUser;
});
exports.getProjectById = (projId, url) => __awaiter(void 0, void 0, void 0, function* () {
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
    const variables = { id: projId };
    const payload = yield gqlRequest.request(url, query, variables);
    return payload.getProject;
});
exports.deleteProj = (projId, workerId, url) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.addWorker = (addWorkerInput, url) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        mutation ($addWorkerInput: [AddWorkerInput]){
          addWorker(input: $addWorkerInput){
            worker {id}
          }
        }
    `;
    return yield gqlRequest.request(url, query, { addWorkerInput });
});
