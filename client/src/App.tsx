import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hoc';
import {GetProjectComponent} from './api/interfaces/types.d';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:8080/graphql',
    }),
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <GetProjectComponent skip={false}>
                {({loading, error, data}) => {
                    console.log({loading, error, data});
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return (<div>this is data: {data}</div>)
                }}
            </GetProjectComponent>
        </ApolloProvider>
    );
};

export default App;
