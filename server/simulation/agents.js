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
const actions_1 = require("./actions");
class Developer {
    constructor(username, url) {
        this.myRoles = [];
        this.userName = username;
        this.url = url;
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            this.myRoles = yield actions_1.getAllRolesByUser(this.userName, this.url);
        });
    }
    showRoles() {
        return this.myRoles;
    }
}
exports.Developer = Developer;
class Employer {
    constructor() {
    }
}
exports.Employer = Employer;
