const gqlRequest = require('graphql-request');
const {exec} = require('child_process');

const url = 'http://localhost:8080/graphql';

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
    return payload.queryUser[0].roles.map(role => ({
        roleId: role.id,
        projId: role.project.id,
        availability: role.availability
    }));
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
            $projFilter: ProjectFilter!, 
            $workerFilter: WorkerFilter!
        ){
        
          deleteWorker(filter: $workerFilter){
            msg
          }

          deleteProject(filter: $projFilter){
            msg
          }
        }
    `;
    const variables = {"workerFilter": {"id": workerId}, "projFilter": {"id": projId}};
    return await gqlRequest.request(url, query, variables);
};

const updateUser = async (userName, roleId) => {

    const query = `
        mutation ($userName: Sting, $roleId: String) {
          updateUser(input: {
            filter: { username: { eq: $userName }},
            remove: { roles: [{id: $roleId}]}
          }) {
            user {
              roles {id}
            }
          }
        }
    `;
    const variables = {"userName": userName, "roleId": roleId};
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

        // First I have two projects I'm involved in:
        const myRoles = await getAllRolesByUser();
        console.log('My roles: ', JSON.stringify(myRoles));
        console.log(
            'My total allocated hours: ',
            myRoles.map(role => role.availability).reduce((a, b) => a + b)
        );

        // One of the projects is being deleted (not by me!):
        const projectToDelete = await getProjectById(myRoles[0].projId);
        const projId = [projectToDelete.getProject.id];
        const workerId = projectToDelete.getProject.workers.map(w => w.id);
        console.log('Project to delete: ');
        console.log('\t - project id: ', projId);
        console.log('\t - workers id: ', workerId);

        const deletePayload = await DeleteProj(projId, workerId);
        console.log('The author deleted the Project: ', JSON.stringify(deletePayload, null, 2));

        // Now I am involved in only one project:
        const myRolesUpdated = await getAllRolesByUser();
        console.log('I am no longer a part of it: ', JSON.stringify(myRolesUpdated));
        console.log(
            'My total allocated hours: ',
            myRolesUpdated.map(role => role.availability).reduce((a, b) => a + b)
        );

        // Now I want to leave the left project:
        // const roleToDelete = myProjectsUpdated

    });

};

main().then(() => console.log('-----'));
