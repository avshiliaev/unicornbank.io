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
const queries_1 = require("./actions/queries");
const mutations_1 = require("./actions/mutations");
const uuid_1 = require("uuid");
class Developer {
    constructor(username, url) {
        this.myRoles = [];
        this.userName = username;
        this.url = url;
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            this.myRoles = yield queries_1.getAllRolesByUser(this.userName, this.url);
        });
    }
    showRoles() {
        return this.myRoles;
    }
}
exports.Developer = Developer;
class Host {
    constructor(url) {
        this.myProjects = [];
        this.hostsIds = [];
        this.url = url;
    }
    addNewHost() {
        return __awaiter(this, void 0, void 0, function* () {
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max)) + 1;
            }
            const numberHosts = getRandomInt(5);
            const newHosts = [...Array(numberHosts)].map(() => ({ username: uuid_1.v4(), password: 'pass', location: 'loc' }));
            const newHostsIds = yield mutations_1.addUser(newHosts, this.url);
            console.log(newHostsIds);
            this.hostsIds = this.hostsIds.concat(newHostsIds.map(user => user.id));
        });
    }
    // Keep always min one host
    removeHost() {
        if (this.hostsIds.length > 1) {
            this.hostsIds = this.hostsIds.slice(0, -1);
        }
    }
    updateProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = yield queries_1.queryProjects(this.url);
            this.myProjects = payload.map(proj => proj.id);
        });
    }
    createProject() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hostsIds.length > 1) {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max)) + 1;
                }
                const activeHosts = this.hostsIds.slice(0, getRandomInt(this.hostsIds.length));
                const generateProject = (hostId) => {
                    return { title: 'title', description: 'descr', hosts: [{ id: hostId }] };
                };
                const projectInput = activeHosts.map(hostId => generateProject(hostId));
                yield mutations_1.addProject(projectInput, this.url);
            }
        });
    }
    deleteRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            // Delete random number of all projects
            if (this.myProjects.length !== 0) {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max)) + 1;
                }
                const toDelete = this.myProjects.slice(0, getRandomInt(this.myProjects.length));
                yield mutations_1.deleteProject(toDelete, this.url);
            }
        });
    }
}
exports.Host = Host;
