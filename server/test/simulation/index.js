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
const asciichart = require('asciichart');
const cliProgress = require('cli-progress');
const url = 'http://localhost:8080/graphql';
const username = 'hisuperhi';
const simTime = 365;
const pricePerHost = 29;
const pricePerDev = 5;
const timer = (ms) => new Promise(res => setTimeout(res, ms));
const playSim = () => __awaiter(void 0, void 0, void 0, function* () {
    const host = new agents_1.Host(url);
    const developer = new agents_1.Developer(url);
    // create a new progress bar instance and use shades_classic theme
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    const rollDice = () => {
        // 2	1+1	1/36 = 3%
        // 3	1+2, 2+1	2/36 = 6%
        // 4	1+3, 2+2, 3+1	3/36 = 8%
        // 5	1+4, 2+3, 3+2, 4+1	4/36 = 11%
        // 6	1+5, 2+4, 3+3, 4+2, 5+1	5/36 = 14%
        // 7	1+6, 2+5, 3+4, 4+3, 5+2, 6+1	6/36 = 17%
        // 8	2+6, 3+5, 4+4, 5+3, 6+2	5/36 = 14%
        // 9	3+6, 4+5, 5+4, 6+3	4/36 = 11%
        // 10	4+6, 5+5, 6+4	3/36 = 8%
        // 11	5+6, 6+5	2/36 = 6%
        // 12	6+6	1/36 = 3%
        const first = Math.ceil(Math.random() * 6);
        const second = Math.ceil(Math.random() * 6);
        return first + second;
    };
    // Simulation records
    let projects = [0];
    let hosts = [0];
    let developers = [0];
    let revenue = [0];
    let counter = 0;
    bar1.start(simTime, 0);
    while (counter !== simTime) {
        // Hosts roll the dice
        let diceHost = rollDice();
        if (diceHost <= 3) {
            yield host.createProject();
        }
        else if (diceHost == 5) {
            yield host.addNewHost();
        }
        else if (diceHost == 9) {
            host.removeHost();
        }
        else if (diceHost >= 11) {
            yield host.updateProjects();
            yield host.deleteRandom();
        }
        // Developers roll the dice
        let diceDev = rollDice();
        if (diceDev == 5) {
            yield developer.addNewDev();
        }
        else if (diceDev == 9) {
            developer.removeDev();
        }
        // Update Metrics
        if (counter % 30 == 0) {
            revenue = revenue.concat(host.hostsIds.length * pricePerHost);
            revenue = revenue.concat(developer.devIds.length * pricePerDev);
            projects = projects.concat(host.allProjects.length);
            hosts = hosts.concat(host.hostsIds.length);
            developers = developers.concat(developer.devIds.length);
            // host.speedUpLeadsGenereation();
            // developer.speedUpLeadsGenereation()
        }
        // Next
        yield timer(100).then(() => {
            // Introduce small latency
            counter += 1;
        });
        bar1.update(counter);
    }
    bar1.stop();
    const maxProjects = Math.max.apply(null, projects);
    const maxHosts = Math.max.apply(null, hosts);
    const maxDev = Math.max.apply(null, developers);
    console.log('1. Number of projects: ', host.allProjects.length);
    console.log('   Max projects: ', maxProjects);
    console.log(asciichart.plot(projects, { height: 6 }));
    console.log('2.1. Number of hosts: ', host.hostsIds.length);
    console.log('   Max hosts: ', maxHosts);
    console.log(asciichart.plot(hosts, { height: 6 }));
    console.log('2.2. Number of developers: ', developer.devIds.length);
    console.log('   Max developers: ', maxDev);
    console.log(asciichart.plot(developers, { height: 6 }));
    console.log('Mean projects per host: ', ((maxProjects + host.allProjects.length) / 2) / ((maxHosts + host.hostsIds.length) / 2));
    console.log('Mean developers per project: ', ((maxDev + developer.devIds.length) / 2) / ((maxProjects + host.allProjects.length) / 2));
    console.log('4. Revenue: ', revenue.reduce((a, b) => a + b));
    console.log(asciichart.plot(revenue, { height: 6 }));
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exec('bash prepare.sh', (err, stdout, stderr) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.error('Dgraph: Error!');
            console.log(err);
        }
        else {
            console.log('Dgraph: Success!');
        }
    }));
    yield timer(2000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield playSim();
    }));
});
main().then(() => console.log('-----'));
