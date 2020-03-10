const gqlRequest = require('graphql-request');
const {exec} = require('child_process');

const url = 'http://localhost:8080/graphql';

const queryProjects = async () => {
    const query = `
        query {
            queryProject{
                id
                title
                description
                tasks {
                    id
                }
                workers {
                  id
                  availability
                  user {username}
                }
                __typename
            }
        }
    `;

    const payload = await gqlRequest.request(url, query);
    const myInvolevedWorkers = payload.queryProject.map(proj => ({
        id: proj.id,
        workers: proj.workers.map(w => w.user.map(u => u.username)),
        hours: proj.workers.map(w => w.availability).reduce((a, b) => a + b)
    }));
    console.log('From employer perspective: ');
    console.log(JSON.stringify(myInvolevedWorkers, null, 2));

    return myInvolevedWorkers
};

const getAllRolesByUser = async () => {
    const query = `
        query getByName($filter: UserFilter){
          queryUser(filter: $filter) {
            id
            roles {
              id
              availability
              project{
                    id
                    title
                    description
                    tasks {
                        id
                    }
                    workers {
                        id
                    }
                    __typename
              }
            }
          }
        }
    `;
    const variables = {"filter": {"username": {"eq": "hisuperhi"}}};
    const payload = await gqlRequest.request(url, query, variables);
    // parse only project ids
    return {
        id: payload.queryUser[0].id,
        roles: payload.queryUser[0].roles.map(role => ({
            roleId: role.id,
            projId: role.project.id,
            availability: role.availability
        }))
    }
};

const getProjectById = async (id) => {
    const query = `
        query getProject($id: ID!){
            getProject(id: $id) {
                id
                title
                __typename
                tags {
                    id
                    title
                    __typename
                }
                tasks {
                    id
                    title
                    content
                    __typename
                }
                workers {
                    id
                    name
                    __typename
                }
            }
        }
    `;
    const variables = {id};
    return await gqlRequest.request(url, query, variables);

};


const DeleteProj = async (projId, workerId) => {

    // While queries are executed in parallel, the mutation are triggered sequentially!
    const query = `
        mutation deleteProject(
            $projId: [ID!], 
            $workerId: [ID!]
        ){
        
          deleteWorker(filter: {id: $workerId}){
            msg
          }

          deleteProject(filter: {id: $projId}){
            msg
          }
        }
    `;
    const variables = {"projId": projId, "workerId": workerId};
    return await gqlRequest.request(url, query, variables);
};

const deleteWorker = async (workerId) => {

    // Deleting worker is like deleting contract that connects a user with a project
    const query = `
        mutation ($id: [ID!]){
          deleteWorker(filter: {id: $id}){
            msg
          }
        }
    `;
    const variables = {id: workerId};
    return await gqlRequest.request(url, query, variables);
};

const leaveWorkerSlot = async (userId, workerId) => {

    // Delete links from both sides leaving the vacant place in a project:
    const query = `
        mutation($userId: ID!, $workerId: ID!) {
          updateUser(input: {
            filter: { id: [$userId]},
            remove: { roles: [{id: $workerId}]}
          }) {
            user {
              id
            }
          }
          updateWorker(input: {
            filter: { id: [$workerId]},
            remove: { user:  [{id: $userId}] }
          }) {
            worker {
              id
            }
          }
        }
    `;
    const variables = {userId, workerId};
    return await gqlRequest.request(url, query, variables);
};

const addWorker = async (projId, userId, name, avail) => {
    const query = `
        mutation ($projId: ID!, $userId: ID!, $avail: Int!, $name: String!){
          addWorker(input: [
                {
                    user: [{id: $userId}], 
                    project: {id: $projId}, 
                    name: $name, 
                    availability: $avail
                }
            ]){
            worker {id}
          }
        }
    `;
    const variables = {projId, userId, name, avail};
    return await gqlRequest.request(url, query, variables);
};


const main = async () => {

    const timer = ms => new Promise(res => setTimeout(res, ms));

    await exec('bash populate.sh', async (err, stdout, stderr) => {
        if (err) {
            console.error('Dgraph: Error!')
        } else {
            console.error('Dgraph: Success!')
        }
    });

    timer(2000).then(async () => {

        // --------------------------------

        const getMyRoles = async () => {
            const myRoles = await getAllRolesByUser();
            console.log('My roles: ', JSON.stringify(myRoles.roles));
            console.log(
                'My allocated hours: ',
                myRoles.roles.map(role => role.availability)//.reduce((a, b) => a + b)
            );
            return myRoles;
        };

        const cleanDeleteProject = async (projId) => {
            const projectToDelete = await getProjectById(projId);
            const workerId = projectToDelete.getProject.workers.map(w => w.id);
            console.log('Project to delete: ');
            console.log('\t - project id: ', [projId]);
            console.log('\t - workers id: ', workerId);

            const deletePayload = await DeleteProj([projId], workerId);
            console.log('The author deleted the Project: ', JSON.stringify(deletePayload, null, 2));

        };

        // --------------------------------

        // 0. This is how the employer sees the state:
        await queryProjects();

        // 1. First I have two projects I'm involved in:
        const myRoles = await getMyRoles();

        // 2. One of the projects is being deleted (not by me!):
        await cleanDeleteProject(myRoles.roles[0].projId);
        // Now I am involved in only one project:
        const myRolesUpdated = await getMyRoles();

        // 3. Now I want to leave the left project:
        const roleToDelete = [myRolesUpdated.roles[0].roleId];
        const deleteWorkerPayload = await deleteWorker(roleToDelete);
        console.log('I have deleted my role: ', JSON.stringify(deleteWorkerPayload, null, 2));
        const myRolesFinal = await getMyRoles();

        // This is how the employer sees the state now:
        const allProjects = await queryProjects();

        // 4. Now I want to enter a project:
        const projToEnter = allProjects[0].id;
        const myId = myRolesFinal.id;
        const iEnteredAProj = await addWorker(projToEnter, myId, "hisuperhi", 10);
        console.log(JSON.stringify(iEnteredAProj));

        await queryProjects();
        const myNewRole = await getMyRoles();

        await leaveWorkerSlot(myId, myNewRole.roles[0].roleId);


        await queryProjects();
        await getMyRoles();

    });

};

main().then(() => console.log('-----'));
