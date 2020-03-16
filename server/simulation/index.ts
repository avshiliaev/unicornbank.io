// tsc && node index.js

import {Host} from './agents';

const {exec} = require('child_process');
const url = 'http://localhost:8080/graphql';
const username = 'hisuperhi';

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

        const host: Host = new Host(url);

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
                await host.createProject();
            } else if (diceHost >= 9) {
                await host.updateProjects();
                await host.deleteRandom();
            }
        }

        await host.updateProjects();
        console.log('Number of projects: ', host.myProjects.length)

    });

};

main().then(() => console.log('-----'));
