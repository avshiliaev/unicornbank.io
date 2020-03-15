import {
    addWorker,
    deleteProj,
    deleteWorker,
    getAllRolesByUser,
    getProjectById,
    leaveWorkerSlot,
    queryProjects
} from './actions';
import {AddWorkerInput} from '../client/src/api/interfaces/types.d';

const {exec} = require('child_process');
const url = 'http://localhost:8080/graphql';
const username = 'hisuperhi';

const main = async () => {

    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

    await exec('bash populate.sh', async (err: any, stdout: any, stderr: any) => {
        if (err) {
            console.error('Dgraph: Error!')
        } else {
            console.error('Dgraph: Success!')
        }
    });

    timer(2000).then(async () => {

       const payload = await queryProjects(url);
       console.log(payload)

    });

};

main().then(() => console.log('-----'));
