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
                developers {
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
                    developers {
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
                developers {
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
