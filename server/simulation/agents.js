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
    constructor(url) {
        this.devIds = [];
        this.maxDevsToCome = 100;
        this.url = url;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    addNewDev() {
        return __awaiter(this, void 0, void 0, function* () {
            const numberDev = this.getRandomInt(this.maxDevsToCome);
            const newDevs = [...Array(numberDev)].map(() => ({ username: uuid_1.v4(), password: 'pass', location: 'loc' }));
            const newDevsIds = yield mutations_1.addUser(newDevs, this.url);
            this.devIds = this.devIds.concat(newDevsIds.map(user => user.id));
        });
    }
    removeDev() {
        if (this.devIds.length > 3) {
            this.devIds = this.devIds.slice(0, -2);
        }
    }
}
exports.Developer = Developer;
class Host {
    constructor(url) {
        this.allProjects = [];
        this.hostsIds = [];
        this.maxHostsToCome = 10;
        this.url = url;
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    addNewHost() {
        return __awaiter(this, void 0, void 0, function* () {
            const numberHosts = this.getRandomInt(this.maxHostsToCome);
            const newHosts = [...Array(numberHosts)].map(() => ({ username: uuid_1.v4(), password: 'pass', location: 'loc' }));
            const newHostsIds = yield mutations_1.addUser(newHosts, this.url);
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
            this.allProjects = payload.map(proj => proj.id);
        });
    }
    createProject() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hostsIds.length > 1) {
                const activeHosts = this.hostsIds.slice(0, this.getRandomInt(this.hostsIds.length));
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
            if (this.allProjects.length !== 0) {
                const toDelete = this.allProjects.slice(0, this.getRandomInt(this.allProjects.length));
                yield mutations_1.deleteProject(toDelete, this.url);
            }
        });
    }
}
exports.Host = Host;
