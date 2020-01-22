import gql from 'graphql-tag';

export const GET_PROJECTS = gql`
    query {
        queryProject{
            id
            title
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

export const DELETE_PROJECT = gql`
    mutation deleteProject($filter: ProjectFilter!){
        deleteProject(filter: $filter){
            msg
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
                tasks {
                    id
                }
                tags {
                    id
                }
                __typename
            }
            __typename
        }
    }
`;
