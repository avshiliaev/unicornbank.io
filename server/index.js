const gqlRequest = require('graphql-request');

const query = `
    query {
      queryUser {
        id
      }
    }
`;

gqlRequest.request('http://localhost:8080/graphql', query).then(data =>
  console.log(data)
);
