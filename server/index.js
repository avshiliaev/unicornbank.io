const gqlRequest = require('graphql-request');
const {exec} = require('child_process');

const getAllUsers = async () => {
    const query = `
        query {
          queryUser {
            id
          }
        }
    `;
    return await gqlRequest.request('http://localhost:8080/graphql', query);
};

const getAllProjects = async () => {
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
                }
                __typename
            }
        }
    `;
    return await gqlRequest.request('http://localhost:8080/graphql', query);
};

const getAllProjByUser = async () => {
    const query = `
        query getByName($filter: UserFilter){
          queryUser(filter: $filter) {
            id
            roles {
              id
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
    return await gqlRequest.request('http://localhost:8080/graphql', query, variables);
};

const NotEqExample = async () => {
    const query = `
        query getByName($filter: UserFilter){
          queryUser(filter: $filter) {
            id
            roles {
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
    const variables = {"filter": {"not": {"username": {"eq": "hisuperhi"}}}};
    return await gqlRequest.request('http://localhost:8080/graphql', query, variables);
};

const DeleteProj = async () => {
    const query = `
        mutation deleteProject($filter: ProjectFilter!){
          updateProject(input: {filter: $filter, set:{workers:[]}}){
            project{workers{id}}
          }
          deleteProject(filter: $filter){
            msg
          }
        }
    `;
    const variables = {"filter": {"id": ["0x29"]}};
    return await gqlRequest.request('http://localhost:8080/graphql', query, variables);
};


const main = async () => {

    const timer = ms => new Promise(res => setTimeout(res, ms));

    await exec('bash populate.sh', async (err, stdout, stderr) => {
        if (err) {
            //some err occurred
            console.error(err)
        } else {
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        }
    });

    timer(2000).then(async () => {
        const allProjByUser = await getAllProjByUser();
        await console.log(JSON.stringify(allProjByUser, null, 2))
    });


};

main().then(() => console.log('Done!'));
