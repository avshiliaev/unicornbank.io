// tsc && node index.js

import {Host} from './agents';

const {exec} = require('child_process');
const cliProgress = require('cli-progress');
const url = 'http://localhost:8080/graphql';
const username = 'hisuperhi';
const simTime = 30 * 12 + 1;
const pricePerProj = 15;

const playSim = async () => {
    const host: Host = new Host(url);
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

    let maxProjects = 0;
    let maxHosts = 0;
    let revenue = 0;
    let counter = 0;
    bar1.start(simTime, 0);

    while (counter !== simTime) {

        let diceHost = rollDice();
        if (diceHost <= 3) {
            await host.createProject();
        } else if (diceHost == 5) {
            host.addNewHost();
            host.hostsNames.length > maxHosts
                ? maxHosts = host.hostsNames.length
                : maxHosts === maxHosts
        } else if (diceHost == 9) {
            host.removeHost();
        } else if (diceHost >= 11) {
            await host.updateProjects();
            host.myProjects.length > maxProjects
                ? maxProjects = host.myProjects.length
                : maxProjects === maxProjects;
            await host.deleteRandom();
        }

        if (counter % 30 == 0) {
            await host.updateProjects();
            revenue += host.myProjects.length * pricePerProj
        }
        counter += 1;
        bar1.update(counter);
    }

    bar1.stop();
    await host.updateProjects();
    console.log('1. Number of projects: ', host.myProjects.length);
    console.log('   Max projects: ', maxProjects);
    console.log('2. Number of hosts: ', host.hostsNames.length);
    console.log('   Max hosts: ', maxHosts);
    console.log('Mean projects per host: ', maxProjects / maxHosts);
    console.log('4. Revenue: ', revenue);
};

const main = async () => {
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
    await exec('bash prepare.sh', async (err: any, stdout: any, stderr: any) => {
        if (err) {
            console.error('Dgraph: Error!');
            console.log(err)
        } else {
            console.log('Dgraph: Success!')
        }
    });
    timer(2000).then(async () => {
        await playSim();
    });
};

main().then(() => console.log('-----'));
