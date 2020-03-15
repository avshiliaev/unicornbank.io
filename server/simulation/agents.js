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
        this.url = url;
    }
    updateProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = yield queries_1.queryProjects(this.url);
            this.myProjects = payload.map(proj => proj.id);
        });
    }
    createProject() {
        return __awaiter(this, void 0, void 0, function* () {
            const projectInput = [{ title: 'title', description: 'descr' }];
            return yield mutations_1.addProject(projectInput, this.url);
        });
    }
    deleteRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.myProjects.length === 0) {
                return '';
            }
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            const toDelete = this.myProjects[getRandomInt(this.myProjects.length)];
            return yield mutations_1.deleteProject([toDelete], this.url);
        });
    }
}
exports.Host = Host;
