"use strict";
// tsc && node index.js
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
const agents_1 = require("./agents");
const { exec } = require('child_process');
const url = 'http://localhost:8080/graphql';
const username = 'hisuperhi';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const timer = (ms) => new Promise(res => setTimeout(res, ms));
    yield exec('bash prepare.sh', (err, stdout, stderr) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.error('Dgraph: Error!');
            console.log(err);
        }
        else {
            console.log('Dgraph: Success!');
        }
    }));
    timer(2000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        let host = new agents_1.Host(url);
        const payload = yield host.createProject();
        yield host.updateProjects();
        const delPayload = yield host.deleteRandom();
        console.log(delPayload);
    }));
});
main().then(() => console.log('-----'));
