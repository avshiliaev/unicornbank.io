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

        const actions = ['create', 'skip', 'delete'];

        function getRandomInt(max: number) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        let counter = 100;
        while (counter !== 0) {
            counter -= 1;
            let action = actions[getRandomInt(actions.length)];

            switch (action) {
                case 'create':
                    await host.createProject();
                    break;
                case 'skip':
                    break;
                case 'delete':
                    await host.updateProjects();
                    await host.deleteRandom();
                    break;
                default:
                    break;
            }
        }

        await host.updateProjects();
        console.log('Number of projects: ', host.myProjects.length)

    });

};

main().then(() => console.log('-----'));
