// tsc && node index.js

import {Developer} from './agents';

const {exec} = require('child_process');
const url = 'http://localhost:8080/graphql';
const username = 'hisuperhi';

const main = async () => {

    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

    await exec('bash ../populate.sh', async (err: any, stdout: any, stderr: any) => {
        if (err) {
            console.error('Dgraph: Error!');
            console.log(err)
        } else {
            console.log('Dgraph: Success!')
        }
    });

    timer(2000).then(async () => {

        let developer: Developer = new Developer(username, url);
        await developer.getRoles();
        console.log(developer.showRoles());


    });

};

main().then(() => console.log('-----'));
