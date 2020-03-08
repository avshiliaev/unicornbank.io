import gql from 'graphql-tag';

export const GET_PROJECTS_OF_USER = gql`
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


export const ADD_PROJECTS = gql`
    mutation addProject($input: [AddProjectInput!]!){
        addProject(
            input: $input
        ) {
            project {
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
            __typename
        }
    }
`;
