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
        const host = new agents_1.Host(url);
        const rollDice = () => {
            const first = Math.ceil(Math.random() * 6);
            const second = Math.ceil(Math.random() * 6);
            return first + second;
        };
        let counter = 100;
        while (counter !== 0) {
            counter -= 1;
            let diceHost = rollDice();
            if (diceHost <= 5) {
                yield host.createProject();
                // } else if (diceHost >= 5 && diceHost <= 10) {
                //     console.log('')
            }
            else if (diceHost >= 9) {
                yield host.updateProjects();
                yield host.deleteRandom();
            }
        }
        yield host.updateProjects();
        console.log('Number of projects: ', host.myProjects.length);
    }));
});
main().then(() => console.log('-----'));
