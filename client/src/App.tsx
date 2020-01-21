import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hoc';
import Pages from './pages';

const cache = new InMemoryCache({
    addTypename: true,
});
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
    }),
});

/*
!WHY INVERSE EDGE IS AWESOME!
Add a Tag to a project, and then query the project:

mutation {
    addTag(
        input: [{ title: "awesome", project: {id: "0x2"} }]
    ) { tag {id} }
}
 */

const App: React.FC = () => {

    return (
        <ApolloProvider client={client}>
            <Pages/>
            <h2>The cache:</h2>
            <div>{JSON.stringify(client.cache)}</div>
        </ApolloProvider>
    );
};

export default App;
