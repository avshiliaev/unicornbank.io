import gql from 'graphql-tag';

export const GET_PROJECT = gql`
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
